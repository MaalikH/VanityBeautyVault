import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../services/navbar-service/navbar.service';
import {DashboardService} from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../app.component.scss']
})
export class DashboardComponent implements OnInit {

  dropdown: boolean;
  activeLink = 'Home';
  pageEdited = false;

  constructor(private navbarService: NavbarService, private dashboardService: DashboardService) {
    this.navbarService.setNavbar(false);
  }

  ngOnInit() {
    this.dashboardService.editObservable.subscribe((edited: boolean) => {
      this.pageEdited = edited;
    });
  }
  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }

  onLinkClick(link: string) {
    this.activeLink = link;
  }

  onSaveClick() {
    this.dashboardService.emitButtonPressed();
  }

}
