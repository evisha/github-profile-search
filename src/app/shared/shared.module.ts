import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {UserCardComponent} from "./components/user-card/user-card.component";
import {ReactiveFormsModule} from "@angular/forms";
import { SpinnerComponent } from './components/spinner/spinner.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpInterceptorService} from "../core/interceptors/http-interceptor.service";



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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    }
  ]
})
export class SharedModule { }
