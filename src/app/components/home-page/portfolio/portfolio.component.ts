import { Component, OnInit, Input } from '@angular/core';
import {Gallery} from '../../../models/gallery.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', '../../../app.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input() galleryInfo: Gallery;

  constructor() { }

  ngOnInit() {
  }

}
