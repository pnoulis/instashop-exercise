import { Component, inject, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandmarkService } from '../landmark.service';
import { LandmarkComponent } from '../landmark/landmark.component';
import { ILandmark } from '../ILandmark';
import { LandmarkModalComponent } from '../landmark-modal/landmark-modal.component';
import { LandmarkSearchComponent } from '../landmark-search/landmark-search.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'landmark-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LandmarkComponent,
    LandmarkModalComponent,
    LandmarkSearchComponent,
  ],
  template: `
    <header>
      <a (click)="isLoggedIn ? handleLogout() : handleLogin()">{{
        isLoggedIn ? 'logout' : 'login'
      }}</a>
      <landmark-search
        [onSearchLandmark]="handleLandmarkSearch.bind(this)"
      ></landmark-search>
    </header>
    <landmark-modal></landmark-modal>
    <ul class="landmark-list">
      <landmark
        *ngFor="let landmark of landmarkList"
        [landmark]="landmark"
        [onThumbClick]="showThumbPopup.bind(this, landmark)"
        [style.order]="landmark.order"
      ></landmark>
    </ul>
  `,
  styleUrl: './landmark-list.component.css',
})
export class LandmarkListComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.loadLandmarks('title', activatedRoute.snapshot.queryParams['title']);
    debug('LANDMARKS LISt');
  }

  @ViewChild(LandmarkModalComponent, { read: LandmarkModalComponent })
  landmarkModal!: LandmarkModalComponent;

  landmarkService: LandmarkService = inject(LandmarkService);
  authService: AuthService = inject(AuthService);
  landmarkList: ILandmark[] = [];
  isLoggedIn: boolean = this.authService.isLoggedIn();
  router: Router = new Router();

  showThumbPopup(landmark: ILandmark) {
    this.landmarkModal.showLandmarkPhoto(landmark);
  }

  handleLandmarkSearch(title: string | null): void {
    this.router.navigate(['/landmarks'], {
      queryParams: {
        title,
      },
    });
  }

  handleLogin() {
    this.router.navigate(['/login']);
  }
  handleLogout() {
    this.authService.logout().then(() => this.router.navigate(['/login']));
  }

  async loadLandmarks(key: string, value: string | null) {
    this.landmarkList = await this.landmarkService.searchLandmark(key, value);
  }
}
