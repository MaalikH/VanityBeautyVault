import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ServicesPageComponent} from './components/services-page/services-page.component';
import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardLoginComponent} from './components/dashboard/dashboard-login/dashboard-login.component';
import { AuthGuard } from './components/dashboard/services/auth-guard.service';
import {GalleryComponent} from './components/gallery-page/gallery.component';
import {BlogPageComponent} from './components/blog-page/blog-page.component';
import {BlogPostComponent} from './components/blog-post/blog-post.component';
import {ShopComponent} from './components/shop/shop.component';
import {ShopItemComponent} from './components/shop/shop-item/shop-item.component';
import {CheckoutPageComponent} from './components/shop/checkout-page/checkout-page.component';

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
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'services',
    redirectTo: 'services/all',
    pathMatch: 'full'
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
  },
  {
    path: 'blog',
    component: BlogPageComponent,
  },
  {
    path: 'blog/:id',
    component: BlogPostComponent,
  },
  {
    path: 'shop/products',
    component: ShopComponent
  },
  {
    path: 'shop/:productID',
    component: ShopItemComponent
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  providers: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
