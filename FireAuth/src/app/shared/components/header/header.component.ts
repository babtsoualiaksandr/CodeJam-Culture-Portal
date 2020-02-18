import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter();
  public user: User;
  constructor(private router: Router,
              public afa: AngularFireAuth,
              private translate: TranslateService) {
                translate.addLangs(['en', 'fr']);
                translate.setDefaultLang('en');

                const browserLang = translate.getBrowserLang();
                translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

  }

  ngOnInit() {
    this.afa.user.subscribe(user => this.user = user);
    this.translate.get(['user'])
   .subscribe(translations => {
     console.log(translations)
     this.user.displayName = translations['user'];
   });

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
