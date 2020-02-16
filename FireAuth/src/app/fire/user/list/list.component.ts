import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../firestore.service';
import { User } from 'firebase';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: User[] = [];

  constructor(public fireService: FirestoreService) { }

  ngOnInit() {
      console.log(this.fireService.users$);
  }

}
