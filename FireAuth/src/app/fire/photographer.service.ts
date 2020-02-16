import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Photographer } from '../shared/models/photographer';




@Injectable({
  providedIn: 'root'
})
export class PhotographerService {
  private itemsCollection: AngularFirestoreCollection<Photographer>;
  public items: Observable<Photographer[]>;
  constructor(private readonly afs: AngularFirestore) {
    // .valueChanges() is simple. It just returns the JSON data without metadata.
    // If you need the
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
  }
  addItem(name: string) {
    // Persist a document id
    const id = this.afs.createId();
    const urlPhoto = 'urlPtoto';
    const item: Photographer = { id, name, urlPhoto };
    this.itemsCollection.doc(id).set(item);
  }

  getItem(): Observable<Photographer[]> {
    this.itemsCollection = this.afs.collection<Photographer>('items');
    this.items = this.itemsCollection.valueChanges();
    return this.items;
  }
}
