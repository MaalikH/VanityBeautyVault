import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../services/navbar-service/navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', '../../app.component.scss']
})
export class DashboardComponent implements OnInit {

  dropdown: boolean;
  activeLink = 'home';

  constructor(private navbarService: NavbarService) {
    this.navbarService.setNavbar(false);
  }

  ngOnInit() {

  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }

  onLinkClick(link: string) {
    this.activeLink = link;
  }

}
