import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandmarkService } from '../landmark.service';
import { LandmarkComponent } from '../landmark/landmark.component';
import { Landmark } from '../landmark';
import { LandmarkModalComponent } from '../landmark-modal/landmark-modal.component';

@Component({
  selector: 'landmark-list',
  standalone: true,
  imports: [CommonModule, LandmarkComponent, LandmarkModalComponent],
  template: `
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
  constructor() {
    this.landmarkList = this.landmarkService.getAll();
  }

  @ViewChild(LandmarkModalComponent, { read: LandmarkModalComponent })
  landmarkModal!: LandmarkModalComponent;

  landmarkService: LandmarkService = inject(LandmarkService);
  landmarkList: Landmark[] = [];

  showThumbPopup(landmark: Landmark) {
    this.landmarkModal.showLandmarkPhoto(landmark);
  }
}
