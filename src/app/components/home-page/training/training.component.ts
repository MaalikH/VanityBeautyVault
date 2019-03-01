import { Component, OnInit, Input } from '@angular/core';
import {ServicesPageService} from '../../services-page/services-page.service';
import {Training} from '../../../models/training.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss', '../../../app.component.scss']
})
export class TrainingComponent implements OnInit {

  @Input() trainingInfo: Training;

  constructor(private servicePageService: ServicesPageService ) { }

  ngOnInit() {
  }

  trainingBtnClicked() {
    this.servicePageService.setSelectedService('training');
  }

}
