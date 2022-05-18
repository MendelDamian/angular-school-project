import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'create', component: UserCreateComponent },
  { path: 'user/:username', component: UserDetailComponent },
  { path: 'users/:p0', component: UserListComponent },
  { path: '**', redirectTo: 'user' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
