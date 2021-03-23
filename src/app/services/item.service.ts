import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection!: AngularFirestoreCollection<Item>;
  items!: Observable<Item[]>;
  itemDoc!: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {

    this.itemsCollection = this.afs.collection('shoppinglist', ref => ref.orderBy('name', 'asc'));

    this.items =this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    if(item.name.trim() !== "" && item.name.trim() !== null) {
      this.itemsCollection.add(item);
    }
  }

  deleteItem(item: Item) {
    this.itemDoc = this.afs.doc(`shoppinglist/${item.id}`);
    this.itemDoc.delete();
  }

}
