import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ILandmark } from '../ILandmark';
import { LandmarkService } from '../landmark.service';
import { LandmarkComponent } from '../landmark/landmark.component';

@Component({
  selector: 'landmark-details',
  standalone: true,
  imports: [ReactiveFormsModule, LandmarkComponent, CommonModule],
  template: `
    <form class="landmark Edit" *ngIf="this.edit === true">
      <header>
        <h1>
          {{ landmark.title }}
          <sup class="edit" (click)="handleLandmarkEdit()">cancel</sup>
        </h1>
        <button>cancel</button>
        <button>save</button>
      </header>
      <label for="title">title</label>
      <input
        class="text"
        id="title"
        type="text"
        [formControl]="landmarkForm.controls.title"
      />

      <label for="short_info">short info</label>
      <input
        class="text"
        id="short_info"
        type="text"
        [formControl]="landmarkForm.controls.title"
      />
      <label for="description">description</label>
      <input
        class="text"
        id="description"
        type="text"
        [formControl]="landmarkForm.controls.title"
      />
      <label for="url">url</label>
      <input
        class="text"
        id="url"
        type="text"
        [formControl]="landmarkForm.controls.title"
      />
      <label for="photo_thumb">photo thumbnail</label>
      <input
        class="text"
        id="photo_thumb"
        type="text"
        [formControl]="landmarkForm.controls.title"
      />
      <label for="photo">photo</label>
      <input
        class="text"
        id="photo"
        type="text"
        [formControl]="landmarkForm.controls.title"
      />
    </form>
    <div class="landmark" *ngIf="edit === false">
      <header>
        <h1>
          {{ landmark.title }}
          <sup class="edit" (click)="handleLandmarkEdit()">edit</sup>
        </h1>
      </header>
      <section>
        <figure>
          <img [src]="landmark.photo" alt="photo of {{ landmark.title }}" />
          <figcaption>
            <a href="{{ landmark.url }}"
              >Visit {{ landmark.title.toLowerCase() }}</a
            >
          </figcaption>
        </figure>
        <section>google maps</section>
      </section>
      <section class="right-panel">
        <p class="text" id="short_info">{{ landmark.short_info }}</p>
        <p class="text" id="description">{{ landmark.description }}</p>
      </section>
    </div>
  `,
  styleUrl: './landmark-details.component.css',
})
export class LandmarkDetailsComponent {
  landmark!: ILandmark;
  landmarkService: LandmarkService = inject(LandmarkService);

  edit: boolean = true;

  landmarkForm = new FormGroup({
    title: new FormControl(''),
    short_info: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private router: Router) {
    this.landmark = this.landmarkService.createLandmark(
      this.router.getCurrentNavigation()?.extras.state,
    );
    this.landmarkForm.setValue({
      title: this.landmark.title,
      short_info: this.landmark.short_info,
      description: this.landmark.description,
    });
  }

  handleLandmarkEdit() {
    this.edit = !this.edit;
  }
}
