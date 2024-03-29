import { Component, Input } from '@angular/core';
import { ILandmark } from '../ILandmark';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'landmark',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <li class="landmark">
      <img
        class="landmark-photo"
        [src]="landmark.photo_thumb"
        alt="photo of {{ landmark.title }}"
        (click)="onThumbClick()"
      />
      <a [routerLink]="['/landmarks', landmark.id]" [state]="landmark">
        <h2 class="landmark-title">
          {{ landmark.title }}
        </h2>
      </a>
      <h3 class="landmark-info">
        {{ landmark.short_info }}
      </h3>
    </li>
  `,
  styleUrl: './landmark.component.css',
})
export class LandmarkComponent {
  @Input() landmark!: ILandmark;
  @Input() onThumbClick!: () => void;
}
