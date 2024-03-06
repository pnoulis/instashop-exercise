import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'landmark-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form
      [formGroup]="searchLandmarkForm"
      (submit)="onSearchLandmark(searchLandmarkForm.controls.title.value)"
    >
      <label for="title">landmarks</label>
      <input
        id="title"
        type="text"
        placeholder="burj..."
        [formControl]="searchLandmarkForm.controls.title"
      />
      <button type="submit"><span class="text">search</span></button>
    </form>
  `,
  styleUrl: './landmark-search.component.css',
})
export class LandmarkSearchComponent {
  searchLandmarkForm = new FormGroup({
    title: new FormControl(''),
  });

  @Input() onSearchLandmark!: (searchTerm: string | null) => void;
}
