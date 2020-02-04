import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { FirestoreComponent } from './fire/firestore/firestore.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { ListComponent } from './fire/user/list/list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'auth', component: AuthComponent },
      { path: 'firestore', component: FirestoreComponent},
      { path: 'contacts', component: ListComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
