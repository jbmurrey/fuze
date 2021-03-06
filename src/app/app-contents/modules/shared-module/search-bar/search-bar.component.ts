import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  @Output() oninput = new EventEmitter<string>();
  
  @Input() label = ''; 
  @Input() input_type = ''
  @Input() button_text = ''

  input_value:string = ''

  onSubmit(event:Event){
    event.preventDefault();
    this.submitted.emit(this.input_value)
  }
  onInput(event:Event){
    event.preventDefault();
    this.oninput.emit(this.input_value)
  }
  constructor() {
    
   }
  ngOnInit(): void {
  }
}
