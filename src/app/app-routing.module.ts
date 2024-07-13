import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { canActivate } from './RouteGuards/authGuard';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'dashboard', component: DashboardComponent, canActivate: [canActivate] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
