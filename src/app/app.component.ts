import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {FirebaseDatabase} from '@angular/fire';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {FirebaseService} from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'VanityBeautyVault';
  item: Observable<any>;
  links;
  instagramLink: string;
  facebookLink: string;
  acuityLink: string;

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private firebase: FirebaseService
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
        }, 2000);

      }
    });

    this.firebase.deleteItem('item');
  }
}
