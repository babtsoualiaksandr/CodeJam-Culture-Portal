import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
user: User;

  constructor(private afa: AngularFireAuth) { }

  ngOnInit() {
    this.afa.user.subscribe(user => {
      this.user = user;
    });
  }

}
