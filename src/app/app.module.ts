import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSectionComponent } from './components/home-page/home-section/home-section.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { JumbotronComponent } from './components/home-page/jumbotron/jumbotron.component';
import { AboutComponent } from './components/home-page/about/about.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServicesComponent } from './components/home-page/services/services.component';
import { ServiceComponent } from './components/home-page/service/service.component';
import { TrainingComponent } from './components/home-page/training/training.component';
import { StatsComponent } from './components/home-page/stats/stats.component';
import { PortfolioComponent } from './components/home-page/portfolio/portfolio.component';
import { PortfolioImageComponent } from './components/home-page/portfolio-image/portfolio-image.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { SubscribeComponent } from './components/home-page/subscribe/subscribe.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardNavbarComponent } from './components/dashboard/dashboard-navbar/dashboard-navbar.component';
import { DashboardContentComponent } from './components/dashboard/dashboard-content/dashboard-content.component';
import { DashboardHomePageComponent } from './components/dashboard/dashboard-home-page/dashboard-home-page.component';
import { DashboardCardComponent } from './components/dashboard/dashboard-card/dashboard-card.component';
import { DashboardContactComponent } from './components/dashboard/dashboard-contact/dashboard-contact.component';
import { DashboardEmailListComponent } from './components/dashboard/dashboard-email-list/dashboard-email-list.component';
import { DashboardInquiriesComponent } from './components/dashboard/dashboard-inquiries/dashboard-inquiries.component';
import { DashboardServicesComponent } from './components/dashboard/dashboard-services/dashboard-services.component';
import { DashboardLoginComponent } from './components/dashboard/dashboard-login/dashboard-login.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSectionComponent,
    HomePageComponent,
    JumbotronComponent,
    AboutComponent,
    ServicesComponent,
    ServiceComponent,
    TrainingComponent,
    StatsComponent,
    PortfolioComponent,
    PortfolioImageComponent,
    ServicesPageComponent,
    SubscribeComponent,
    ContactPageComponent,
    DashboardComponent,
    DashboardNavbarComponent,
    DashboardContentComponent,
    DashboardHomePageComponent,
    DashboardCardComponent,
    DashboardContactComponent,
    DashboardEmailListComponent,
    DashboardInquiriesComponent,
    DashboardServicesComponent,
    DashboardLoginComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    NgbModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
