import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { TopHeaderComponent } from './top-header/top-header.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  declarations: [TopHeaderComponent]
})
export class HeaderModule { }
