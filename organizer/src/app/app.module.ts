import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SelectorComponent } from './selector/selector.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { HomeComponent } from './home/home.component';
import { MomentPipe } from './share/moment.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OperatorComponent } from './example/operatorRxJs/operator.component';
import { RouterModule } from '@angular/router';
import { TaskService } from './share/task.service';
import { DateService } from './share/date.service';
import { MessageService } from './share/message.service';
import { MessageComponent } from './example/message/message.component';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {LoggedInGuard} from 'ngx-auth-firebaseui';

import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { TimelineComponent } from './example/timeline/timeline.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { FirebaseComponent } from './upload/firebase/firebase.component';
import { AuthComponent } from './auth/auth/auth.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './layout/default/default.module';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    HomeComponent,
    MomentPipe,
    OperatorComponent,
    MessageComponent,
    TimelineComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    FirebaseComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DefaultModule,
    VerticalTimelineModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard] },
      { path: 'rxjs', component: OperatorComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: 'fire', component: FirebaseComponent, canActivate: [LoggedInGuard]},
      { path: 'dash', loadChildren : () => DefaultModule}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgxAuthFirebaseUIModule.forRoot(
      environment.firebase,
      () => 'project-85570893344',
            {
              enableFirestoreSync: true, // enable/disable autosync users with firestore
              toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
              toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
              authGuardFallbackURL: '/dash/login', // url for unauthenticated users - to use in combination with canActivate feature on a route
              authGuardLoggedInURL: '/dash', // url for authenticated users - to use in combination with canActivate feature on a route
              passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
              passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
              // Same as password but for the name
              nameMaxLength: 50,
              nameMinLength: 2,
              // If set, sign-in/up form is not available until email has been verified.
              // Plus protected routes are still protected even though user is connected.
              guardProtectedRoutesUntilEmailIsVerified: true,
              enableEmailVerification: true, // default: true
            }),
    MatButtonModule
  ],
  providers: [MessageService, TaskService, DateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
