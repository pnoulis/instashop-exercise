import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandmarkService } from '../landmark.service';
import { LandmarkComponent } from '../landmark/landmark.component';
import { Landmark } from '../landmark';

@Component({
  selector: 'landmark-list',
  standalone: true,
  imports: [CommonModule, LandmarkComponent],
  template: `
    <ul class="landmark-list">
      <landmark
        *ngFor="let landmark of landmarkList"
        [landmark]="landmark"
      ></landmark>
    </ul>
  `,
  styleUrl: './landmark-list.component.css',
})
export class LandmarkListComponent {
  landmarkService: LandmarkService = inject(LandmarkService);
  landmarkList: Landmark[] = [];

  constructor() {
    this.landmarkList = this.landmarkService.getAll();
    console.log(this.landmarkList);
  }
}
