import {OnInit,Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ElectronService } from 'src/app/app-contents/services/electron/electron.service';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css'],
})
export class SearchHomeComponent implements OnInit {
  input_value = ''
  dataSource
  data
  loaded = false
  displayedColumns: string[] = ['title'];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private electron: ElectronService) {}

  setInput(value: string) {
    this.filterData(value)
  }
  
  filterData(value: string) {
    this.input_value = value;
    this.dataSource.filter = value.trim().toLowerCase()
  }

  ngOnInit() {
    this.loaded = false;
    this.electron.ipcRenderer.invoke('products:get').then((result) => {
      this.data = result
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.loaded= true
   
   
    });
 
  }
}
