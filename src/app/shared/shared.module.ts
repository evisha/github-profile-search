import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {UserCardComponent} from "./components/user-card/user-card.component";
import {ReactiveFormsModule} from "@angular/forms";
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    UserCardComponent,
    SpinnerComponent
  ],
    exports: [
        SearchBarComponent,
        UserCardComponent,
        SpinnerComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
