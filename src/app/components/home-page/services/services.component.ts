import { Component, OnInit, Input } from '@angular/core';
import {ServicesPageService} from '../../services-page/services-page.service';
import {Observable} from 'rxjs';
import {FirebaseService} from '../../../services/firebase-service/firebase.service';
import {AngularFireDatabase} from '@angular/fire/database';
import { map } from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', '../../../app.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() sectionInfo: Observable<any>;
  @Input() services: any;

  constructor(private servicesPageService: ServicesPageService, private fbService: FirebaseService, private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
  }

  servicesButtonClicked() {
    this.servicesPageService.setSelectedService('all');
  }


}
