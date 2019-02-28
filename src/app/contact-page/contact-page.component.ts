import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../models/contact.model';
import {FirebaseService} from '../services/firebase.service';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss', '../app.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactMessage: ContactModel;
  contactInfo;

  constructor(private fbService: FirebaseService, private alertService: AlertService) {
    this.contactMessage = new class implements ContactModel {
      email: string;
      message: string;
      name: string;
      time: number;
      read: boolean;
    };
  }

  ngOnInit() {
    this.contactInfo = this.fbService.getItem('contact');
  }

  onSubmit() {
    this.contactMessage.time = Date.now();
    this.contactMessage.read = false;
    this.fbService.pushListItem('inquiries', this.contactMessage);
    this.alertService.newAlert('success', 'Your message has successfully been sent', true, true, 'Success!');
    this.contactMessage = {
      email: null,
      message: null,
      name: null,
      time: null,
      read: false
    };
  }


}
