import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AlertModel} from '../../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private navbarSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  navbar: Observable<boolean> = this.navbarSubject.asObservable();

  constructor() { }

  setNavbar(showNavbar: boolean) {
    this.navbarSubject.next(showNavbar);
  }
}
