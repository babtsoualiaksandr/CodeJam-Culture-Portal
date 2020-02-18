import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sideBarOpen = true;
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.get(['login.username', 'login.password'])
    .subscribe(translations => {

    });
  }

  toggleSideBar() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
