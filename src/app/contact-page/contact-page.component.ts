import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../models/contact.model';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss', '../app.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactMessage: ContactModel;
  phone: string;
  email: string;

  constructor() {
    this.contactMessage = new class implements ContactModel {
      email: string;
      message: string;
      name: string;
      time: string;
    };

    this.phone = 'xxx-xxx-xxxx';
    this.email = 'sparklelashdc_@gmail.com';
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Message', this.contactMessage);
  }


}
