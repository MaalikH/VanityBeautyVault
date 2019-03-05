import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase-service/firebase.service';
import {DataService} from '../../../services/data-service/data.service';
import {Subscribers} from '../../../models/email-list.model';
import {UnreadService} from '../services/unread.service';

@Component({
  selector: 'app-dashboard-email-list',
  templateUrl: './dashboard-email-list.component.html',
  styleUrls: ['./dashboard-email-list.component.scss']
})
export class DashboardEmailListComponent implements OnInit {
  subscribers: Subscribers[];

  constructor(private dataService: DataService, private unreadService: UnreadService) { }

  ngOnInit() {
    this.dataService.getSubscribers().subscribe((data: Subscribers[]) => {
      this.subscribers = data;
      this.unreadService.setUnreadSubscribers(this.subscribers.length);
    });
  }

}
