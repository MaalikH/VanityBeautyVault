import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../services/navbar-service/navbar.service';
import {DashboardService} from './services/dashboard.service';
import {UnreadService} from './services/unread.service';
import {ContactModel} from '../../models/contact.model';
import {DataService} from '../../services/data-service/data.service';
import * as _ from 'lodash';
import { map, filter} from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../app.component.scss']
})
export class DashboardComponent implements OnInit {

  dropdown: boolean;
  activeLink = 'Home';
  pageEdited = false;
  unreadInquiries: number = null;
  subscriberCount: number = null;

  constructor(private navbarService: NavbarService, private dashboardService: DashboardService,
              private unreadService: UnreadService, private dataService: DataService ) {
    this.navbarService.setNavbar(false);
  }

  ngOnInit() {
    this.dashboardService.editObservable.subscribe((edited: boolean) => {
      this.pageEdited = edited;
    });
    this.unreadService.unreadInquries.subscribe((data: number) => {
      this.unreadInquiries = data;
    });
    this.unreadService.subscriberCount.subscribe((data: number) => {
      this.subscriberCount = data;
    })
    this.dataService.getInquiries().subscribe((data: ContactModel[]) => {
      const inquries = data;
      const unread = _.filter(inquries, 'unread');
      this.unreadService.setUnreadInquiries(unread.length);
    });
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }


  onLinkClick(link: string) {
    this.activeLink = link;
    this.dashboardService.pageEdited(false);
  }

  onSaveClick() {
    this.dashboardService.emitButtonPressed();
  }

}
