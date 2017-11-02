import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {TablesComponent} from "./tables.component";



export const routes: Routes = [
  {
    path: '',
    component: TablesComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
