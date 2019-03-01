import { Component, OnInit, Input} from '@angular/core';
import {Stat} from '../../../models/stat.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss', '../../../app.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() statsInfo: Stat[];

  constructor() { }

  ngOnInit() {
  }

}
