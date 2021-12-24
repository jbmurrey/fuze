import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WebsitesRoutingModule } from './websites-routing.module';
import { WebsitesHomeComponent } from './websites-home/websites-home.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
@NgModule({
  declarations: [
    WebsitesHomeComponent,
  ],
  imports: [
    CommonModule,
    WebsitesRoutingModule,
    SharedModuleModule,
    HttpClientModule
  ],
  exports:[
  ]
})
export class WebsitesModule { }
