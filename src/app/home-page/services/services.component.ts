import { Component, OnInit, Input } from '@angular/core';
import {ServicesPageService} from '../../services-page/services-page.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', '../../app.component.scss']
})
export class ServicesComponent implements OnInit {

  services = ['Training', 'Eyelash Extensions', 'Microblading', 'Waxing'];

  constructor(private servicesPageService: ServicesPageService) { }

  ngOnInit() {

  }

  servicesButtonClicked() {
    this.servicesPageService.setSelectedService('all');
  }


}
