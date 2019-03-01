import { Component, OnInit, Input } from '@angular/core';
import {ServicesPageService} from '../../services-page/services-page.service';
import {FirebaseService} from '../../../services/firebase-service/firebase.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {HomeServices} from '../../../models/homeServices.model';
import {HomePageService} from '../../../models/homePageService.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', '../../../app.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() servicesSection: HomeServices;
  @Input() services: HomePageService[];

  constructor(private servicesPageService: ServicesPageService, private fbService: FirebaseService, private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  servicesButtonClicked() {
    this.servicesPageService.setSelectedService('all');
  }


}
