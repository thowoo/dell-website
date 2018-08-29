import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
// import { BsDropdownModule } from 'ngx-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    // BsDropdownModule.forRoot(),
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    MatMenuModule,
    MatButtonModule
  ]
})
export class HeaderModule { }
