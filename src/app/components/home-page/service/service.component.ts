import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  @Input() service;
  @Input() index;
  imageURL: string;

  ngOnInit() {
    this.imageURL = `../../../assets/home/services/ServiceIcon${this.index + 1}.png`;

  }
}
