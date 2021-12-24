import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElectronService } from './electron/electron.service';

@Injectable({
  providedIn: 'root'
})
export class ShopifyDataService {
  constructor(private http:HttpClient, private electron:ElectronService) { }

  getFirstTenPages(web_url: string) {
    let data = [];
    for (let i=1;i<=10;i++) {
      this.search(web_url, i).subscribe(res => {
        data = data.concat(res);
        if(i == 10){
          console.log(data);
          return data;
        }
      });
    }
  }
  
  search(web_url: string, iterator: number){
    return this.http.get(web_url + '/products.json?limit=250&page=' + iterator);
  }
}

