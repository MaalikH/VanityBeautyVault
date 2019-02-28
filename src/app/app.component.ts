import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {FirebaseDatabase} from '@angular/fire';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {FirebaseService} from './services/firebase.service';
import {AlertService} from './services/alert.service';
import {AlertModel} from './models/alert.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'VanityBeautyVault';
  links;
  instagramLink: string;
  facebookLink: string;
  acuityLink: string;
  alert: AlertModel = {
    type: 'success',
    message: null,
    dismissible: true,
    show: true,
    header: 'Default'
  };

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private firebase: FirebaseService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.links = this.firebase.getItem('common');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout( function () {
          console.log('FUNCTION RAN');
          if (document.getElementById('custom_js') != null) {
            document.getElementById('custom_js').remove();
          }
          const node = document.createElement('script');
          node.src = 'assets/sparkley.js';
          node.type = 'text/javascript';
          node.async = false;
          node.id = 'custom_js';
          node.charset = 'utf-8';
          document.getElementsByTagName('head')[0].appendChild(node);
        }, 1000);

      }
    });

    this.alertService.alert.subscribe((alert: AlertModel) => {
      this.alert = alert;
    });
    this.alertService.alert.pipe(
      debounceTime(5000)
    ).subscribe(() => this.alert.show = false);
  }

  closeAlert() {
    this.alert.message = null;
  }
}
