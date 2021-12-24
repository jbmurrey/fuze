import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'src/app/app-contents/services/electron/electron.service';
import { ShopifyDataService } from 'src/app/app-contents/services/shopify-data.service';
@Component({
  selector: 'app-websites-home',
  templateUrl: './websites-home.component.html',
  styleUrls: ['./websites-home.component.css']
})
export class WebsitesHomeComponent implements OnInit {
  constructor(private electron: ElectronService, private shopify:ShopifyDataService) { }
  data = []
  setInput(event:string){
    console.log(this.shopify.getFirstTenPages(event))
    this.electron.ipcRenderer.send('data:recieved','data');
  }
  ngOnInit(): void {
  }
}
