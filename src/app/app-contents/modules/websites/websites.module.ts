import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    SharedModuleModule
  ],
  exports:[
  ]
})
export class WebsitesModule { }
