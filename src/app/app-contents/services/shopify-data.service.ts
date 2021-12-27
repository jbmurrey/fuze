import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElectronService } from './electron/electron.service';

@Injectable({
  providedIn: 'root',
})
export class ShopifyDataService {
  constructor(private http: HttpClient, private electron: ElectronService) {}
  web_url: string;
  getNumPages(url: string) {
    this.web_url = url;
    this.recursiveAlgorithim(1, 2048, 0);
  }
  recursiveAlgorithim(_min: number, _max: number, _lim: number) {
    if (_max - _min == 1) {
      this.getFirstTenPages(this.web_url, _min);
      return;
    }
    this.search(this.web_url, _max).subscribe((res: any) => {
      if (res.products.length != 0) {
        if (_lim == 0) {
          return this.recursiveAlgorithim(_max, _max * 2, 0);
        }
        let temp = _max;
        _max = Math.floor(_max + (_lim - _max) / 2) + 1;
        _min = temp;
        return this.recursiveAlgorithim(_min, _max, _lim);
      } else {
        return this.recursiveAlgorithim(
          _min,
          Math.floor(_max - (_max - _min) / 2),
          _max - 1
        );
      }
    });
  }

  getFirstTenPages(web_url: string, last_page: number) {
    let data: any = [];
    let num = 0;
    let d = new Map();
    let url = (new URL(web_url));
    let domain = url.hostname.replace('.com','')
  
    console.log(last_page);
    for (let i = 1; i <= last_page; i++) {
      this.search(web_url, i).subscribe((res: any) => {
        num++;
        console.log(num);
        data = data.concat(res.products);
        if (num == last_page) {
          console.log(web_url + ': ' + data.length);
          d.set(
            domain,
            data.map((d) => ({
              title: d.title,
              variants: d.variants.map((v) => ({
                title: v.title,
                available: v.available,
              })),
            }))
          );
          let key = d.keys().next().value;
          let values = d.get(key);
          this.electron.ipcRenderer.send('products:post', values, key);
        }
      });
    }
  }

  search(web_url: string, iterator: number) {
    return this.http.get(web_url + '/products.json?limit=250&page=' + iterator);
  }
}
