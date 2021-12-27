import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchHomeComponent } from './search-home/search-home.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    SearchHomeComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModuleModule
  ],
  exports:[
  ]
})
export class SearchModule { }
