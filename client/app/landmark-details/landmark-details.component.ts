import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ILandmark } from '../ILandmark';
import { LandmarkService } from '../landmark.service';
import { LandmarkComponent } from '../landmark/landmark.component';
import { GoogleMapsModule, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'landmark-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LandmarkComponent,
    CommonModule,
    RouterLink,
    GoogleMapsModule,
    MapMarker,
  ],
  template: `
    <form
      [formGroup]="landmarkForm"
      (submit)="handleLandmarkUpdate()"
      class="landmark Edit"
      *ngIf="this.edit === true"
    >
      <header>
        <h1>
          {{ landmark.title }}
        </h1>
        <button type="button" class="text" (click)="handleLandmarkEdit()">
          back
        </button>
        <button type="submit" class="text">save</button>
      </header>
      <label for="title">title</label>
      <input
        class="text"
        id="title"
        type="text"
        [formControl]="landmarkForm.controls.title"
      />
      <label for="order">order</label>
      <input
        class="text"
        id="order"
        type="text"
        [formControl]="landmarkForm.controls.order"
      />

      <label for="short_info">short info</label>
      <textarea
        class="text"
        id="short_info"
        type="text"
        [formControl]="landmarkForm.controls.short_info"
      ></textarea>
      <label for="description">description</label>
      <textarea
        class="text"
        id="description"
        type="text"
        [formControl]="landmarkForm.controls.description"
      ></textarea>
      <label for="url">url</label>
      <textarea
        class="text"
        id="url"
        type="text"
        [formControl]="landmarkForm.controls.url"
      ></textarea>
      <label for="photo_thumb">photo thumbnail</label>
      <textarea
        class="text"
        id="photo_thumb"
        type="text"
        [formControl]="landmarkForm.controls.photo_thumb"
      ></textarea>
      <label for="photo">photo</label>
      <textarea
        class="text"
        id="photo"
        type="text"
        [formControl]="landmarkForm.controls.photo"
      ></textarea>
    </form>
    <div class="landmark" *ngIf="edit === false">
      <header>
        <h1>
          {{ landmark.title }}
        </h1>
        <button type="button" class="text">
          <a [routerLink]="['/']">landmarks</a>
        </button>
        <button type="button" class="text" (click)="handleLandmarkEdit()">
          edit
        </button>
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
        <section class="gmaps">
          <google-map
            width="100%"
            [options]="{
              center: { lat: landmark.location[1], lng: landmark.location[0] }
            }"
          >
            <map-marker
              [position]="{
                lat: landmark.location[1],
                lng: landmark.location[0]
              }"
              [label]="{ color: 'red', text: 'label' }"
            ></map-marker>
          </google-map>
        </section>
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

  edit: boolean = false;

  landmarkForm = new FormGroup({
    title: new FormControl(''),
    order: new FormControl(0),
    short_info: new FormControl(''),
    description: new FormControl(''),
    url: new FormControl(''),
    photo_thumb: new FormControl(''),
    photo: new FormControl(''),
  });

  constructor(private router: Router) {
    this.landmark = this.landmarkService.createLandmark({
      ...this.router.getCurrentNavigation()?.extras.state,
    });
    this.landmarkForm.setValue({
      title: this.landmark.title,
      order: this.landmark.order,
      short_info: this.landmark.short_info,
      description: this.landmark.description,
      url: this.landmark.url,
      photo_thumb: this.landmark.photo_thumb,
      photo: this.landmark.photo,
    });
  }

  handleLandmarkEdit() {
    this.edit = !this.edit;
  }

  async handleLandmarkUpdate() {
    const landmark = await this.landmarkService.updateLandmark({
      id: this.landmark.id,
      ...this.landmarkForm.value,
    });
    this.landmark = landmark;
  }
}
