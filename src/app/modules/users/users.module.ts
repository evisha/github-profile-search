import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {SharedModule} from "../../shared/shared.module";
import {UsersRoutingModule} from "./users-routing.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    HttpClientModule,
  ]
})
export class UsersModule { }
