import { Component, OnInit, Input } from '@angular/core';
import {ServicesPageService} from '../../services-page/services-page.service';
import {Training} from '../../../models/training.model';
import {DataService} from '../../../services/data-service/data.service';
import {Classes} from '../../../models/classes.model';
import {ClassModel} from '../../../models/class.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss', '../../../app.component.scss']
})
export class TrainingComponent implements OnInit {

  @Input() trainingInfo: Training;
  classes: ClassModel[];

  constructor(private servicePageService: ServicesPageService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getClasses().subscribe((data: ClassModel[]) => {
      this.classes = data;
    });
  }

  trainingBtnClicked() {
    this.servicePageService.setSelectedService('training');

  }

}
