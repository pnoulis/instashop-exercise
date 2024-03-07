import { Component, inject, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandmarkService } from '../landmark.service';
import { LandmarkComponent } from '../landmark/landmark.component';
import { ILandmark } from '../ILandmark';
import { LandmarkModalComponent } from '../landmark-modal/landmark-modal.component';
import { LandmarkSearchComponent } from '../landmark-search/landmark-search.component';

@Component({
  selector: 'landmark-list',
  standalone: true,
  imports: [
    CommonModule,
    LandmarkComponent,
    LandmarkModalComponent,
    LandmarkSearchComponent,
  ],
  template: `
    <landmark-search
      [onSearchLandmark]="handleLandmarkSearch.bind(this)"
    ></landmark-search>
    <landmark-modal></landmark-modal>
    <ul class="landmark-list">
      <landmark
        *ngFor="let landmark of landmarkList"
        [landmark]="landmark"
        [onThumbClick]="showThumbPopup.bind(this, landmark)"
      ></landmark>
    </ul>
  `,
  styleUrl: './landmark-list.component.css',
})
export class LandmarkListComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    this.loadLandmarks('title', activatedRoute.snapshot.queryParams['title']);
  }

  @ViewChild(LandmarkModalComponent, { read: LandmarkModalComponent })
  landmarkModal!: LandmarkModalComponent;

  landmarkService: LandmarkService = inject(LandmarkService);
  landmarkList: ILandmark[] = [];

  router: Router = new Router();

  showThumbPopup(landmark: ILandmark) {
    this.landmarkModal.showLandmarkPhoto(landmark);
  }

  handleLandmarkSearch(title: string | null): void {
    this.router.navigate(['.'], {
      queryParams: {
        title,
      },
    });
  }
  async loadLandmarks(key: string, value: string | null) {
    this.landmarkList = await this.landmarkService.searchLandmark(key, value);
  }
}
