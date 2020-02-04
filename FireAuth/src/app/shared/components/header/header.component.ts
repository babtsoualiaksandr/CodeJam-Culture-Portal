import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  user: User;
  constructor(private router: Router, public afa: AngularFireAuth) {

  }

  ngOnInit() {
    this.afa.user.subscribe(user => this.user = user);
  }

  toggleSideBarShow() {
    this.toggleSideBar.emit();
  }

  signIn() {
    this.router.navigate(['home/auth']);
  }
  signOut() {
    this.afa.auth.signOut();
    this.router.navigate(['home/auth']);
  }
}
