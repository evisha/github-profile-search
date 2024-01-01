import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccessDeniedComponent} from "./shared/components/access-denied/access-denied.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'access-denied',
    pathMatch: 'full',
    component: AccessDeniedComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then(
        (m) => m.UsersModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
