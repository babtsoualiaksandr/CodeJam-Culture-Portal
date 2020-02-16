import { Component, OnInit } from '@angular/core';
import { Theme } from 'ngx-auth-firebaseui';
import { User } from 'firebase';
import { BehaviorSubject, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from '../fire/firestore.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  user: User;
  public newUser: Subject<User> = new Subject();
  themes = Theme;
  constructor(private afa: AngularFireAuth, private firesStore: FirestoreService) {}
  ngOnInit() {}
  printUser(event) {
    console.log(event);
    this.firesStore.setBasePath();
  }

  printError(event) {
    console.error(event);
  }
}
