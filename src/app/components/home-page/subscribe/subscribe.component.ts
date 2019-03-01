import { Component, OnInit, Input } from '@angular/core';
import {FirebaseService} from '../../../services/firebase-service/firebase.service';
import {AlertService} from '../../../services/alert-service/alert.service';
import {Subscribe} from '../../../models/subscribe.model';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss',  '../../../app.component.scss']
})
export class SubscribeComponent implements OnInit {
  @Input() subscribeInfo: Subscribe;
  email: string;

  constructor(private fbService: FirebaseService, private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubcribeClick() {
    this.fbService.pushListItem('subscriptions', {email: this.email});
    this.alertService.newAlert('success', 'You have successfully subscribed to our mailing list', true, true, 'Success!');
  }

}
