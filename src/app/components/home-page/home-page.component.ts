import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase-service/firebase.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  aboutParagraph;
  servicesInfo;
  services;
  trainingInfo;
  galleryInfo;
  statsInfo;
  subscribeInfo;

  constructor(private fbService: FirebaseService) { }

  ngOnInit() {
    this.aboutParagraph = this.fbService.getItem('home/about');
    this.servicesInfo = this.fbService.getItem('home/services');
    this.services = this.fbService.getList('home/services/services');
    this.trainingInfo = this.fbService.getItem('home/training');
    this.galleryInfo = this.fbService.getItem('home/gallery');
    this.statsInfo = this.fbService.getList('home/stats');
    this.subscribeInfo = this.fbService.getItem('home/subscribe');
  }

}
