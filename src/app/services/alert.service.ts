import { Injectable } from '@angular/core';
import {AlertModel} from '../models/alert.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject: BehaviorSubject<AlertModel> = new BehaviorSubject<AlertModel>({
    type: 'success',
    message: null,
    dismissible: true,
    show: false,
    header: 'Default Header'
  });
  alert: Observable<AlertModel> = this.alertSubject.asObservable();

  constructor() { }

  newAlert(type: string, message: string, dismissible: boolean, show: boolean, header: string) {
    this.alertSubject.next({
      type: type,
      message: message,
      dismissible: dismissible,
      header: header,
      show: true
    });
  }

}
