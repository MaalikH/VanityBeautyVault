import { Component, OnInit } from '@angular/core';
import {ServicesPageService} from '../../services-page/services-page.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss', '../../app.component.scss']
})
export class TrainingComponent implements OnInit {

  constructor(private servicePageService: ServicesPageService ) { }

  ngOnInit() {
  }

  trainingBtnClicked() {
    this.servicePageService.setSelectedService('training');
  }

}
