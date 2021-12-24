import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'src/app/app-contents/services/electron/electron.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {

  constructor(private electron: ElectronService) { }

  ngOnInit(): void {
  this.electron.ipcRenderer.send('message','here')
  }

}
