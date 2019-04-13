import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  items: any; //  list of objects
  item: Observable<any> = null; //   single object

  constructor(private db: AngularFireDatabase) { }

// Return a single observable item
  getItem(key: string): Observable<any> {
    const itemPath =  key;
    this.item = this.db.object(itemPath).valueChanges();
    return this.item;
  }

  getList(path: string) {
    this.items = this.db.list(path).valueChanges();
    return this.items;
  }

  pushListItem(path: string, item: any) {
    const itemsRef = this.db.list(path);
    itemsRef.push(item);
  }

  updateObject(path: string, item: any) {
    this.db.object(path).set(item);
  }

  createItem(item: any, path: string): void {
    const itemRef = this.db.object(path);
    itemRef.set(item);
  }

  updateItem(item: any, path): void {
    const itemRef = this.db.object(path);
    itemRef.update(item);
  }

  deleteItem(path: string): void {
    const itemRef = this.db.object(path);
    itemRef.remove()
      .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
    this.items.remove()
      .catch(error => this.handleError(error))
  }

  // Default error handling for all actions
  private handleError(error) {
    // console.log(error);
  }
}
