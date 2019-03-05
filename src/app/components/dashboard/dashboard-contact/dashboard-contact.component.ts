import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase-service/firebase.service';
import {ContactPage} from '../../../models/contactPage.model';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard-contact',
  templateUrl: './dashboard-contact.component.html',
  styleUrls: ['./dashboard-contact.component.scss']
})
export class DashboardContactComponent implements OnInit {

  contactHeaderEdit = false;
  contactTitleEdit = false;
  contactSubtitleEdit = false;
  contactButtonEdit = false;
  contact: ContactPage;

  constructor(private fbService: FirebaseService, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.fbService.getItem('contact').subscribe((data: ContactPage) => {
      this.contact = data;
    });
    this.dashboardService.editPressedObservable.subscribe(() => {
      this.fbService.updateObject('contact', this.contact);
      this.dashboardService.pageEdited(false);
      this.contactHeaderEdit = false;
      this.contactTitleEdit = false;
      this.contactSubtitleEdit = false;
      this.contactButtonEdit = false;
    });
  }

  toggleContactHeader() {
    this.contactHeaderEdit = !this.contactHeaderEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleContactTitleEdit() {
    this.contactTitleEdit = !this.contactTitleEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleContactSubtitleEdit() {
    this.contactSubtitleEdit = !this.contactSubtitleEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleContactButtonEdit() {
    this.contactButtonEdit = !this.contactButtonEdit;
    this.dashboardService.pageEdited(true);
  }

}
