import { Component, OnInit, Input } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss',  '../../app.component.scss']
})
export class SubscribeComponent implements OnInit {
  @Input() sectionInfo;
  email: string;

  constructor(private fbService: FirebaseService) { }

  ngOnInit() {
  }

  onSubcribeClick() {
    this.fbService.pushListItem('subscriptions', {email: this.email});
  }

}
