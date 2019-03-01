import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ServicesPageService} from './services-page.service';
import {ActivatedRoute} from '@angular/router';
import {FirebaseService} from '../../services/firebase-service/firebase.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {DataService} from '../../services/data-service/data.service';
import {Service} from '../../models/service.model';
import _ from 'lodash';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss', '../../app.component.scss']
})
export class ServicesPageComponent implements OnInit {
  servicesList: Service[] = null;
  filteredServices;
  selectedService = 'all';

  constructor(private servicesPageService: ServicesPageService, private route: ActivatedRoute, private fbService: FirebaseService, private db: AngularFireDatabase, private dataService: DataService) {
  }

  ngOnInit() {
    const results = combineLatest(this.dataService.getServicesPageInfo(), this.route.paramMap);
    results.subscribe((result: any) => {
      this.servicesList = result[0];
      this.selectedService = result[1].params.service;
      this.filterServices(this.selectedService);
      console.log('Service List', this.servicesList);
      console.log('RESULT', result[1].params.service);
    });
  }


  filterServices(type: string) {
    this.selectedService = type;
    if (type === 'all' || type === null) {
      this.filteredServices = this.servicesList;
      console.log('FIlTER SERVICES', this.filteredServices);
    } else {
      this.filteredServices = _.filter(this.servicesList, {'serviceType': type});
    }
  }
}


