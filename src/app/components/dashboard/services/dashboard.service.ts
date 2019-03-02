import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  editSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  editObservable = this.editSubject.asObservable();

  editPressed: Subject<void> = new Subject<void>();
  editPressedObservable = this.editPressed.asObservable();

  constructor() { }

  pageEdited(edited: boolean) {
    this.editSubject.next(edited);
  }

  emitButtonPressed() {
    this.editPressed.next();
  }
}
