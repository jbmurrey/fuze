import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {
  data:any = [];
  query:any = [];
  constructor() {
  }


setInput(event:string){
   console.log(event)
}
 queryData(event:string){
   
  for(let i =0; i<20;i++){
     let product = this.data[i];
     if(product.title.indexOf(event) != -1){
       this.query = this.query.concat(product);
   }
 }
}
  ngOnInit(): void {
    
   }
  }


