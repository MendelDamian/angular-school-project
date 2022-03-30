import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'create', component: UserCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
