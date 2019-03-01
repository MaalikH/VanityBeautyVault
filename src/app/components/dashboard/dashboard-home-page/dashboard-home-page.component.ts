import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase-service/firebase.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard-home-page',
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss']
})
export class DashboardHomePageComponent implements OnInit {

  aboutObservable: any;
  aboutParagraph: string;
  aboutParagraphEdit = false;
  servicesObservable: Observable<any>;
  servicesTitleEdit: any;
  servicesTitle: any;
  service: {
    button: string,
    services: any[],
    title: string
  }

  constructor(private fbService: FirebaseService) { }

  ngOnInit() {
    this.aboutObservable = this.fbService.getItem('home/about');
    this.servicesObservable = this.fbService.getItem('home/services');
    this.servicesObservable.subscribe((data: any) => {
      this.service = data;
    });
    console.log('SERVICE', this.service);
  }

  toggleParagraphEdit() {
    this.aboutParagraphEdit = !this.aboutParagraphEdit;
  }

  toggleServicesTitle() {
    this.servicesTitleEdit = !this.servicesTitleEdit;
  }

}
