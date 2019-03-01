import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase-service/firebase.service';
import {HomePage} from '../../models/homepage.model';
import {BehaviorSubject, combineLatest, forkJoin, Observable} from 'rxjs';
import {DataService} from '../../services/data-service/data.service';
import {HomePageService} from '../../models/homePageService.model';
import {Stat} from '../../models/stat.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data: any;
  homePage: HomePage;
  services: HomePageService[];
  stats: Stat[];


  constructor(private fbService: FirebaseService, private dataService: DataService) { }

  ngOnInit() {
    this.getHomePageInfo();
    this.dataService.getHomePageData().subscribe((data: HomePage) => {
      this.homePage = data;
    });

    this.dataService.getHomePageServices().subscribe((data: HomePageService[]) => {
      this.services = data;
    });
    console.log('THIS DATA', this.data);
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
