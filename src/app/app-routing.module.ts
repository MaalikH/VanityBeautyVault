import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ServicesPageComponent} from './components/services-page/services-page.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

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
    component: DashboardComponent
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
