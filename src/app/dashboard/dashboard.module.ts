import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard.component";
import {NavBarComponent} from "../navbar/navbar.component";
import {RightSidebarComponent} from "../right-sidebar/right-sidebar.component";
import {LeftSidebarComponent} from "../left-sidebar/left-sidebar.component";
import {FooterComponent} from "../footer/footer.component";

@NgModule({
  declarations: [
    NavBarComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [],
  bootstrap: [DashboardComponent]
})
export class DashBoardModule { }
