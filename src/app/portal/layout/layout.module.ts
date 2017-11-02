import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    SideNavComponent,
    NavBarComponent,
    FooterComponent
  ],
  declarations: [
    SideNavComponent,
    NavBarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
