import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data-service/data.service';
import {UnreadService} from '../services/unread.service';
import {ContactModel} from '../../../models/contact.model';
import * as _ from 'lodash';


@Component({
  selector: 'app-dashboard-inquiries',
  templateUrl: './dashboard-inquiries.component.html',
  styleUrls: ['./dashboard-inquiries.component.scss']
})
export class DashboardInquiriesComponent implements OnInit {
  inquries: ContactModel[];
  unreadCount: number;

  constructor(private dataService: DataService, private unreadService: UnreadService) { }

  ngOnInit() {
    this.dataService.getInquiries().subscribe((data: ContactModel[]) => {
      this.inquries = data;
      this.inquries = _.orderBy(this.inquries, 'time', 'desc');
    });
  };

  markMessageAsRead(index: number) {
    this.inquries[index].unread = false;
    this.dataService.updateInquiries('inquiries', this.inquries);
  }

  deleteMessage(index: number) {
    this.inquries.splice(index, 1);
    this.dataService.updateInquiries('inquiries', this.inquries);
  }
}
