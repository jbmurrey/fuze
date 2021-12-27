import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchHomeComponent } from './search-home/search-home.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    SearchHomeComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModuleModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  exports:[
  ]
})
export class SearchModule { }
