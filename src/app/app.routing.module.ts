import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/auth.guard';
import { SignatureComponent } from './signature/signature.component';
export const approute: Routes = [
    {
        path:'signature', component:SignatureComponent
    },{
        path:'', component:AppComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(approute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
