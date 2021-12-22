import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() label = ''; 
  @Input() button = 'false';
  
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.button)
  }

}
