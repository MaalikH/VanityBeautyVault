import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../models/contact.model';
import {FirebaseService} from '../../services/firebase-service/firebase.service';
import {AlertService} from '../../services/alert-service/alert.service';
import {DataService} from '../../services/data-service/data.service';
import {ContactPage} from '../../models/contactPage.model';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss', '../../app.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactMessage: ContactModel;
  contactInfo: ContactPage;

  constructor(private fbService: FirebaseService, private alertService: AlertService, private dataService: DataService) {
    this.contactMessage = new class implements ContactModel {
      email: string;
      message: string;
      name: string;
      time: number;
      read: boolean;
    };
  }

  ngOnInit() {
   this.dataService.getContactPageInfo().subscribe((data: ContactPage) => {
     this.contactInfo = data;
   });
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
