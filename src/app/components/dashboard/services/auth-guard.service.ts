import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  LoggedIn = false;

  constructor(private router: Router) { }

  canActivate() {
    if (this.LoggedIn) {
      return true;
    }
    this.router.navigate(['/admin']);
    return false;
  }
}
