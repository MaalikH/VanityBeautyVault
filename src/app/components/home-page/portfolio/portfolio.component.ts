import { Component, OnInit, Input } from '@angular/core';
import {Gallery} from '../../../models/gallery.model';
import {Portfolio, PortfolioItem} from '../../../models/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', '../../../app.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input() galleryInfo: Gallery;
  @Input() portfolioInfo: Portfolio;

  constructor() { }

  ngOnInit() {
  }

}
