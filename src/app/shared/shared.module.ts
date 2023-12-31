import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {UserCardComponent} from "./components/user-card/user-card.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SearchBarComponent,
    UserCardComponent
  ],
    exports: [
        SearchBarComponent,
        UserCardComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
