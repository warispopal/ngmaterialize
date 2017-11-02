import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {PortalComponent} from "./portal.component";


export const routes: Routes = [

  {
    path: 'portal',
    component: PortalComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },

    ]
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
