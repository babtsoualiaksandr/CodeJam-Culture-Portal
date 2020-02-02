import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  user: User;

  constructor(public afa: AngularFireAuth) { }

  ngOnInit() {
    this.afa.user.subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }

}
