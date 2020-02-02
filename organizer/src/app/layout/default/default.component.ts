import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;

  constructor(public afa: AngularFireAuth) { }

  ngOnInit() {
    console.log(this.afa);
  }

  toggleSideBarMe() {
    this.sideBarOpen = ! this.sideBarOpen;
  }

}
