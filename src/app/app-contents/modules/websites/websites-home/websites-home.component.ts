import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'src/app/app-contents/services/electron/electron.service';

@Component({
  selector: 'app-websites-home',
  templateUrl: './websites-home.component.html',
  styleUrls: ['./websites-home.component.css']
})
export class WebsitesHomeComponent implements OnInit {
  constructor(private electron: ElectronService) { }

  setInput(event:string){
    console.log(event)
     //this.electron.ipcRenderer.send('data:recieved',data)
  }
  ngOnInit(): void {
  }
}
