import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import {Routing} from "./tables.router";

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [TablesComponent]
})
export class TablesModule { }
