import { Routes } from '@angular/router';
import { LandmarkListComponent } from './landmark-list/landmark-list.component';
import { LandmarkDetailsComponent } from './landmark-details/landmark-details.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landmarks',
    pathMatch: 'full',
  },
  {
    path: 'landmarks',
    component: LandmarkListComponent,
  },
  {
    path: 'landmarks/:id',
    component: LandmarkDetailsComponent,
    title: 'landmark details',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
