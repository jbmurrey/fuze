import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsitesHomeComponent } from './websites-home/websites-home.component';
const routes: Routes = [{path:'',component: WebsitesHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsitesRoutingModule { }
