import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {FirebaseDatabase} from '@angular/fire';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {FirebaseService} from './services/firebase-service/firebase.service';
import {AlertService} from './services/alert-service/alert.service';
import {AlertModel} from './models/alert.model';
import {NavbarService} from './services/navbar-service/navbar.service';
import {LinkModel} from './models/common.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showNavbar = true;
  title = 'VanityBeautyVault';
  links: LinkModel;
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
    private alertService: AlertService,
    private navbarService: NavbarService
  ) {
  }

  ngOnInit() {
    this.firebase.getItem('common').subscribe((data: LinkModel) => {
      this.links = data;
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout( function () {
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
        }, 2000);

      }
    });

    this.navbarService.navbar.subscribe((showNavbar: boolean) => {
      this.showNavbar = showNavbar;
    })

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
