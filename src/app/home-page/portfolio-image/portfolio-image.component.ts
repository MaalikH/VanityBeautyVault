import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-image',
  templateUrl: './portfolio-image.component.html',
  styleUrls: ['./portfolio-image.component.scss']
})
export class PortfolioImageComponent implements OnInit {

  @Input() index;
  imagePath: string;

  constructor() { }

  ngOnInit() {
    this.imagePath = `../../../assets/portfolio/portfolio${this.index + 1}.jpg`;
  }

}
