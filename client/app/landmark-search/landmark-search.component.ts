import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'landmark-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="searchLandmarkForm" (submit)="handleSearch()">
      <label for="landmarkName">landmarks</label>
      <input
        id="landmarkName"
        type="text"
        placeholder="burj..."
        formControlName="landmarkName"
      />
      <button type="submit"><span class="text">search</span></button>
    </form>
  `,
  styleUrl: './landmark-search.component.css',
})
export class LandmarkSearchComponent {
  searchLandmarkForm = new FormGroup({
    landmarkName: new FormControl(''),
  });

  handleSearch() {
    console.log('yolo');
  }
}
