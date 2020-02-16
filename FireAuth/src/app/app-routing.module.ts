import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { FirestoreComponent } from './fire/firestore/firestore.component';
import { ListComponent } from './fire/user/list/list.component';
import { TimeLineComponent } from './shared/time-line/time-line.component';
import { ListPhotographerComponent } from './fire/photographer/list-photographer/list-photographer.component';
import { AddPhotographerComponent } from './fire/photographer/add-photographer/add-photographer.component';
import { YouTubeComponent } from './you-tube/components/you-tube/you-tube.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'auth', component: AuthComponent },
      { path: 'firestore', component: FirestoreComponent},
      { path: 'contacts', component: ListComponent },
      { path: 'time', component:  TimeLineComponent},
      { path: 'photographer', component:  ListPhotographerComponent},
      { path: 'addphotographer', component:  AddPhotographerComponent},
      { path: 'youtube', component:  YouTubeComponent},
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
