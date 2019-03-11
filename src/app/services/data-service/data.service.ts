import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FirebaseService} from '../firebase-service/firebase.service';
import {HomePage} from '../../models/homepage.model';
import {Stat} from '../../models/stat.model';
import {HomePageService} from '../../models/homePageService.model';
import {ContactModel} from '../../models/contact.model';
import {ContactPage} from '../../models/contactPage.model';
import {Service} from '../../models/service.model';
import {Subscribers} from '../../models/email-list.model';
import {Classes} from '../../models/classes.model';
import {ClassModel} from '../../models/class.model';
import {Portfolio} from '../../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataRetrievedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  dataRetrieved: Observable<boolean> = this.dataRetrievedSubject.asObservable();

  constructor(private firebaseService: FirebaseService) { }

  getHomePageData(): Observable<HomePage> {
    return this.firebaseService.getItem('home');
  }

  getHomePageServices(): Observable<HomePageService[]> {
    return this.firebaseService.getList('home/services/services');
  }

  getHomePageStatInfo(): Observable<Stat[]> {
    return this.firebaseService.getList('home/stats');
  }

  getServicesPageInfo(): Observable<Service[]> {
    return this.firebaseService.getList('services');
  }

  getContactPageInfo(): Observable<ContactPage> {
    return this.firebaseService.getItem('contact');
  }

  getPortfolioInfo(): Observable<Portfolio> {
    return this.firebaseService.getItem('portfolio');
  }

  getSubscribers(): Observable<Subscribers[]> {
    return this.firebaseService. getList('subscriptions');
  }

  getInquiries(): Observable<ContactModel[]> {
    return this.firebaseService.getList('inquiries');
  }

  updateInquiries(path: string, item: ContactModel[]) {
    this.firebaseService.updateObject(path, item);
  }

  updateServices(path: string, item: Service[]) {
    this.firebaseService.updateObject('services', item);
  }

  getClasses(): Observable<ClassModel[]> {
    return this.firebaseService.getList('classes');
  }

  setDataRetrieved(dataSet: boolean) {
    this.dataRetrievedSubject.next(dataSet);
  }
}
