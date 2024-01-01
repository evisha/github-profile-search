import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from "./modules/users/users.module";
import {UsersRoutingModule} from "./modules/users/users-routing.module";
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch} from "@angular/common/http";
import {HttpInterceptorService} from "./core/interceptors/http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    UsersRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
