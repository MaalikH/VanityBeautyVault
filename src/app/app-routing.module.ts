import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ServicesPageComponent} from './components/services-page/services-page.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardLoginComponent} from './components/dashboard/dashboard-login/dashboard-login.component';
import { AuthGuard } from './components/dashboard/services/auth-guard.service';

const routes: Routes = [

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent,
  },
  {
    path: 'services/:service',
    component: ServicesPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'admin',
    component: DashboardLoginComponent
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
