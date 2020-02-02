import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarMe: EventEmitter<any> = new EventEmitter();
  user: User;
  constructor(public afa: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.afa.user.subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }
  toggleSideBar() {
    this.toggleSideBarMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  signOut() {
    this.afa.auth.signOut();
    this.router.navigate(['/login']);
  }

  signIn() {
    this.router.navigate(['/login']);
    this.router.navigate(['/']);
  }

}
