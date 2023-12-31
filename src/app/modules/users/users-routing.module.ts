import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ProfilePageComponent } from '../profile/components/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: ':idUser',
    component: ProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
