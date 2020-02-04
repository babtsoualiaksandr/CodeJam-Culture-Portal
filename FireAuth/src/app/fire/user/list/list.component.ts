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

  constructor(private fireService: FirestoreService) { }

  ngOnInit() {
    this.fireService.getUsersAll().subscribe((users: User[]) => this.users = users);
  }

}
