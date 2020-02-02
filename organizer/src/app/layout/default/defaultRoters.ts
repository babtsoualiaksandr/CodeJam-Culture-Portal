import { DefaultComponent } from './default.component';
import { LoggedInGuard, AuthComponent } from 'ngx-auth-firebaseui';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { Route } from '@angular/router';


export const  defaultRouters: Route[] = [
  { path: '', component: DefaultComponent,
children: [
  { path: '', component: DashboardComponent, canActivate: [LoggedInGuard] },
  { path: 'login', component: AuthComponent},
  { path: 'posts', component: PostsComponent }
] },
];
