import { Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { AppComponent } from './app.component';

export const approute: Routes = [
    {
        path:'', component:AppComponent, canActivate:[AuthGuard]
    }
];
