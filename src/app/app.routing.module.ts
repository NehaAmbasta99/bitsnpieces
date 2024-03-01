// app.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { SignatureComponent } from './signature/signature.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'signature', component: SignatureComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'users', component: UserComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' }, // Redirect to /todo by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
