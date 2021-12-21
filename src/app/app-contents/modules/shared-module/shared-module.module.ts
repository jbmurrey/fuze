import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
   SearchBarComponent
  ]
})
export class SharedModuleModule { }
