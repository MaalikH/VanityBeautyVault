import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../services/firebase-service/firebase.service';
import {ContactPage} from '../../../models/contactPage.model';

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

  constructor(private fbService: FirebaseService) { }

  ngOnInit() {
    this.fbService.getItem('contact').subscribe((data: ContactPage) => {
      this.contact = data;
    });
  }

  toggleContactHeader() {
    this.contactHeaderEdit = !this.contactHeaderEdit;
  }

  toggleContactTitleEdit() {
    this.contactTitleEdit = !this.contactTitleEdit;
  }

  toggleContactSubtitleEdit() {
    this.contactSubtitleEdit = !this.contactSubtitleEdit;
  }

  toggleContactButtonEdit() {
    this.contactButtonEdit = !this.contactButtonEdit;
  }

}
