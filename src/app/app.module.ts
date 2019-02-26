import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSectionComponent } from './home-page/home-section/home-section.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JumbotronComponent } from './home-page/jumbotron/jumbotron.component';
import { AboutComponent } from './home-page/about/about.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServicesComponent } from './home-page/services/services.component';
import { ServiceComponent } from './home-page/service/service.component';
import { TrainingComponent } from './home-page/training/training.component';
import { StatsComponent } from './home-page/stats/stats.component';
import { PortfolioComponent } from './home-page/portfolio/portfolio.component';
import { PortfolioImageComponent } from './home-page/portfolio-image/portfolio-image.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { SubscribeComponent } from './home-page/subscribe/subscribe.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

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
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
