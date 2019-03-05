import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnreadService {

  unreadInquiriesSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  unreadInquries: Observable<number> = this.unreadInquiriesSubject.asObservable();

  subscribersSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  subscriberCount: Observable<number> = this.subscribersSubject.asObservable();

  constructor() { }

  setUnreadInquiries(count: number) {
    this.unreadInquiriesSubject.next(count);
  }

  setUnreadSubscribers(count: number) {
    this.subscribersSubject.next(count);
  }
}
