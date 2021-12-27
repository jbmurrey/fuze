import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'monitor-home',
  styleUrls: ['./monitor-home.component.css'],
  templateUrl:'./monitor-home.component.html',
})
export class MonitorHomeComponent implements AfterViewInit {
  displayedColumns: string[] = ['title'];
  dataSource

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngAfterViewInit() {
    const users = [
      {
        title:"hello"
      },
      {
        title:"bye"
      },
      {
        title:"cosine"
      },
      {
        title:"hello"
      },
      {
        title:"bye"
      },
      {
        title:"cosine"
      },
      {
        title:"hello"
      },
      {
        title:"bye"
      },
      {
        title:"cosine"
      }
    ]
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
