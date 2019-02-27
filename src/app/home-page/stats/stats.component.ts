import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss', '../../app.component.scss']
})
export class StatsComponent implements OnInit {

  @Input() sectionInfo;

  constructor() { }

  ngOnInit() {
  }

}
