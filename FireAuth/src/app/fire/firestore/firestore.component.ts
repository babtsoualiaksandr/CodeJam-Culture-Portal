import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.scss'],
})
export class FirestoreComponent implements OnInit {
  listItemsStorage = [];
  title = 'Files of User';
  user: User;

  constructor(private fireService: FirestoreService, private afa: AngularFireAuth) {}

  ngOnInit() {
    this.fireService
      .getFileUploads(100)
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
      .subscribe(fileUploads => {
        this.listItemsStorage = fileUploads;
      });

    this.fireService.getUsersAll();
    console.log('***** firestore', this.afa);
    this.afa.user.subscribe(user => {
      console.log('********** user', user);
      this.user = user;
    });
  }
}
