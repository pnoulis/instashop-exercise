import { Routes } from '@angular/router';
import { LandmarkListComponent } from './landmark-list/landmark-list.component';
import { LandmarkDetailsComponent } from './landmark-details/landmark-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LandmarkListComponent,
  },
  {
    path: 'landmarks/:id',
    component: LandmarkDetailsComponent,
    title: 'landmark details',
  },
];
