import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {DashboardComponent} from "./dashboard.component";


export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
