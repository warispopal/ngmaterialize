import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routing} from "./dashboard.router";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
