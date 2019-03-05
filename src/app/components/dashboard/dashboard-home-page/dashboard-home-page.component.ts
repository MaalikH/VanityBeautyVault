import { Component, OnInit, Input } from '@angular/core';
import {FirebaseService} from '../../../services/firebase-service/firebase.service';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {DataService} from '../../../services/data-service/data.service';
import {HomePage} from '../../../models/homepage.model';
import {Service} from '../../../models/service.model';
import {HomePageService} from '../../../models/homePageService.model';
import {Stat} from '../../../models/stat.model';
import {DashboardService} from '../services/dashboard.service';
import {LinkModel} from '../../../models/common.model';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss', '../../../app.component.scss']
})
export class DashboardHomePageComponent implements OnInit {

  originalHonmePage: HomePage;
  originalServices: HomePageService[];
  originalStats: Stat[];
  homePage: HomePage;
  services: HomePageService[];
  stats: Stat[];
  aboutParagraphEdit = false;
  servicesTitleEdit = false;
  servicesEdit = [false, false, false, false];
  servicesButtonEdit = false;
  trainingTitleEdit = false;
  trainingInfoEdit = false;
  trainingButtonEdit = false;
  statsEdit = [false, false, false, false];
  emailTitleEdit = false;
  emailsubTitleEdit = false;
  emailButton = false;
  links: LinkModel;
  instagramEdit = false;
  acuityEdit = false;
  pageEdited = false;


  constructor(private fbService: FirebaseService, private dataService: DataService, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getHomePageInfo();
    this.fbService.getItem('/common').subscribe((data: LinkModel) => {
      this.links = data;
    });
    this.dashboardService.editPressedObservable.subscribe(() => {
      this.fbService.updateObject('home/about', this.homePage.about);
      this.fbService.updateObject('home/services/button', this.homePage.services.button);
      this.fbService.updateObject('home/services/title', this.homePage.services.title);
      this.fbService.updateObject('home/services/services', this.services);
      this.fbService.updateObject('home/stats', this.stats);
      this.fbService.updateObject('home/subscribe', this.homePage.subscribe);
      this.fbService.updateObject('home/training', this.homePage.training);
      this.fbService.updateObject('common', this.links);
      this.dashboardService.pageEdited(false);
      this.aboutParagraphEdit = false;
      this.servicesTitleEdit = false;
      this.servicesEdit = [false, false, false, false];
      this.servicesButtonEdit = false;
      this.trainingTitleEdit = false;
      this.trainingInfoEdit = false;
      this.trainingButtonEdit = false;
      this.statsEdit = [false, false, false, false];
      this.emailTitleEdit = false;
      this.emailsubTitleEdit = false;
      this.emailButton = false;
      this.instagramEdit = false;
    });
  }

  toggleParagraphEdit() {
    this.aboutParagraphEdit = !this.aboutParagraphEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleServicesTitle() {
    this.servicesTitleEdit = !this.servicesTitleEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleServiceEdit(index: number) {
    this.servicesEdit[index] = !this.servicesEdit[index];
    this.dashboardService.pageEdited(true);
    return this.servicesEdit[index];
  }

  toggleServicesButton() {
    this.servicesButtonEdit = !this.servicesButtonEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleTrainingTitleEdit() {
    this.trainingTitleEdit = !this.trainingTitleEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleTrainingInfoEdit() {
    this.trainingInfoEdit = !this.trainingInfoEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleTrainingButtonEdit() {
    this.trainingButtonEdit = !this.trainingButtonEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleStatsEdit(index: number) {
    this.statsEdit[index] = !this.statsEdit[index];
    this.dashboardService.pageEdited(true);
    return this.statsEdit[index];
  }

  toggleEmailTitle() {
    this.emailTitleEdit = !this.emailTitleEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleEmailSubtitle() {
    this.emailsubTitleEdit = !this.emailsubTitleEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleEmailButton() {
    this.emailButton = !this.emailButton;
    this.dashboardService.pageEdited(true);
  }

  toggleLink() {
    this.instagramEdit = !this.instagramEdit;
    this.dashboardService.pageEdited(true);
  }

  getHomePageInfo() {
    const data = combineLatest(this.dataService.getHomePageData(), this.dataService.getHomePageServices(), this.dataService.getHomePageStatInfo());
    data.subscribe((results) => {
      this.homePage = results[0];
      this.services = results[1];
      this.stats = results[2];
      this.originalHonmePage = results[0];
      this.services = results[1];
      this.stats = results[2];
      this.dataService.setDataRetrieved(true);
    });
  }

}
