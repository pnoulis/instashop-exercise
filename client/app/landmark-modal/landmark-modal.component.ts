import { Component, ViewChild, ElementRef } from '@angular/core';
import { ILandmark } from '../ILandmark';

@Component({
  selector: 'landmark-modal',
  standalone: true,
  template: `
    <dialog class="modal" #dialog>
      <button class="modal-close" (click)="dialog.close()"></button>
      <figure>
        <figcaption>{{ landmark?.title }}</figcaption>
        <img
          class="modal-photo"
          [src]="landmark?.photo"
          alt="photo of {{ landmark?.title }}"
        />
      </figure>
    </dialog>
  `,
  styleUrl: './landmark-modal.component.css',
})
export class LandmarkModalComponent {
  landmark!: ILandmark;

  @ViewChild('dialog', { read: ElementRef })
  dialog!: ElementRef;

  showLandmarkPhoto(landmark: ILandmark) {
    this.landmark = landmark;
    this.dialog.nativeElement.showModal();
  }
}
