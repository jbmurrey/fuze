import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'websites', loadChildren:()=>import('./app-contents/modules/websites/websites.module').then((m)=>m.WebsitesModule)},
  {path:'search', loadChildren:()=>import('./app-contents/modules/search/search.module').then((m)=>m.SearchModule)},
  {path:'monitor', loadChildren:()=>import('./app-contents/modules/monitor/monitor.module').then((m)=>m.MonitorModule)},
  {path:'settings', loadChildren:()=>import('./app-contents/modules/settings/settings.module').then((m)=>m.SettingsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
