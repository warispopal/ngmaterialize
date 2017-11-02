import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routing} from "./portal.router";
import { PortalComponent } from './portal.component';
import {LayoutModule} from "./layout/layout.module";


@NgModule({
  imports: [
    CommonModule,
    Routing,
    LayoutModule
  ],
  declarations: [
    PortalComponent
  ]
})
export class PortalModule { }
