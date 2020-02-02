import { Component, OnInit } from '@angular/core';
import { Theme } from 'ngx-auth-firebaseui';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  themes = Theme;
  printUser(event) {
    console.log(event);
  }

  printError(event) {
   console.error(event);
  }

  ngOnInit() {
  }

}
