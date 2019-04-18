import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../../services/navbar-service/navbar.service';
import {AuthServiceService} from '../services/auth-service.service';
import {Router} from '@angular/router';
import {AuthGuard} from '../services/auth-guard.service';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss']
})
export class DashboardLoginComponent implements OnInit {
  user: {
    email: string,
    password: string
  } = {
    email: '',
    password: ''
  };

  constructor(private navbarService: NavbarService, private authGuard: AuthGuard, private authService: AuthServiceService, private router: Router) {
    this.navbarService.setNavbar(false);
  }

  ngOnInit() {
  }

  onSumbit() {
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        this.authGuard.LoggedIn = true;
        this.router.navigate(['admin/dashboard']);
      })
  }

}
