import { Component, ViewChild, ElementRef } from '@angular/core';
import { Landmark } from '../landmark';

@Component({
  selector: 'landmark-modal',
  standalone: true,
  template: `
    <dialog class="modal" #dialog>
      <button class="modal-close" (click)="dialog.close()"></button>
      <img
        class="modal-photo"
        [src]="landmark?.photo_thumb"
        alt="photo of {{ landmark?.title }}"
      />
    </dialog>
  `,
  styleUrl: './landmark-modal.component.css',
})
export class LandmarkModalComponent {
  landmark!: Landmark;

  @ViewChild('dialog', { read: ElementRef })
  dialog!: ElementRef;

  showLandmarkPhoto(landmark: Landmark) {
    this.landmark = landmark;
    this.dialog.nativeElement.showModal();
  }
}
