import { Component, OnInit, Input } from '@angular/core';
import {FirebaseService} from '../../../services/firebase-service/firebase.service';
import {Observable} from 'rxjs';
import {FirebaseObjectObservable} from '@angular/fire/database-deprecated';
import {AngularFireDatabase} from '@angular/fire/database';
import {NavigationEnd, Router} from '@angular/router';
import {About} from '../../../models/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../../app.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() about: About;

  constructor(private router: Router, private firebaseService: FirebaseService, private db: AngularFireDatabase) { }

  ngOnInit() {
  }

}
