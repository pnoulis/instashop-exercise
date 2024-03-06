import { Component, inject } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  ActivatedRoute,
  Router,
} from '@angular/router';
import { ILandmark } from '../ILandmark';
import { LandmarkService } from '../landmark.service';

@Component({
  selector: 'landmark-details',
  standalone: true,
  imports: [],
  template: `
    <section>
      <p>landmark details</p>
      <header></header>
    </section>
  `,
  styleUrl: './landmark-details.component.css',
})
export class LandmarkDetailsComponent {
  landmark!: ILandmark;
  landmarkService: LandmarkService = inject(LandmarkService);

  constructor(private router: Router) {
    this.landmark = this.landmarkService.createLandmark(
      this.router.getCurrentNavigation()?.extras.state,
    );
  }
}
