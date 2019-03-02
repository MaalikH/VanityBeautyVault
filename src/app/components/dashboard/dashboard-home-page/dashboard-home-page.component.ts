import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase-service/firebase.service';
import {combineLatest, Observable} from 'rxjs';
import {DataService} from '../../../services/data-service/data.service';
import {HomePage} from '../../../models/homepage.model';
import {Service} from '../../../models/service.model';
import {HomePageService} from '../../../models/homePageService.model';
import {Stat} from '../../../models/stat.model';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss', '../../../app.component.scss']
})
export class DashboardHomePageComponent implements OnInit {

  homePage: HomePage;
  services: HomePageService[];
  stats: Stat[];
  aboutParagraphEdit = false;
  servicesTitleEdit = false;
  servicesEdit = [false, false, false, false];
  servicesButtonEdit = false;


  constructor(private fbService: FirebaseService, private dataService: DataService) { }

  ngOnInit() {
    this.getHomePageInfo();
  }

  toggleParagraphEdit() {
    this.aboutParagraphEdit = !this.aboutParagraphEdit;
  }

  toggleServicesTitle() {
    this.servicesTitleEdit = !this.servicesTitleEdit;
  }

  toggleServiceEdit(index: number) {
    this.servicesEdit[index] = !this.servicesEdit[index];
    return this.servicesEdit[index];
  }

  toggleServicesButton() {
    this.servicesButtonEdit = !this.servicesButtonEdit;
  }

  getHomePageInfo() {
    const data = combineLatest(this.dataService.getHomePageData(), this.dataService.getHomePageServices(), this.dataService.getHomePageStatInfo());
    data.subscribe((results) => {
      this.homePage = results[0];
      this.services = results[1];
      this.stats = results[2];
      this.dataService.setDataRetrieved(true);
    });
  }

}
