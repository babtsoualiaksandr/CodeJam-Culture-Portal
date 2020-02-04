import { Component, OnInit } from '@angular/core';
import { Theme } from 'ngx-auth-firebaseui';
import { User } from 'firebase';
import { BehaviorSubject, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  user: User;
  public newUser: Subject<User> = new Subject();
  themes = Theme;
  constructor(private afa: AngularFireAuth ) {

  }
  ngOnInit() {}
  printUser(event) {
    console.log(event);
    this.afa.user.subscribe( user => {
      console.log(user);
      this.newUser.next(user)});
  }

  printError(event) {
    console.error(event);
  }
}
