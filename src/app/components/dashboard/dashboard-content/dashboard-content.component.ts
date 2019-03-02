import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss', '../../../app.component.scss']
})
export class DashboardContentComponent implements OnInit {

  contactHeaderEdit = false;

  constructor() { }

  ngOnInit() {
  }

  toggleContactHeader() {
    this.contactHeaderEdit = !this.contactHeaderEdit;
  }

}
