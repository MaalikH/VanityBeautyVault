import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', '../../app.component.scss']
})
export class ServicesComponent implements OnInit {

  services = ['Training', 'Eyelash Extensions', 'Microblading', 'Waxing'];

  constructor() { }

  ngOnInit() {

  }

}
