import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesPageService {

  private selectedServiceSubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  selectedService: Observable<string> = this.selectedServiceSubject.asObservable();

  constructor() { }

  setSelectedService(service: string) {
    this.selectedServiceSubject.next(service);
  }
}
