import { Injectable } from '@angular/core';
import { LandmarkQuery } from './LandmarkQuery';
import { ILandmark } from './ILandmark';
import { Landmark } from './Landmark';
import Parse from 'parse';

@Injectable({
  providedIn: 'root',
})
class LandmarkService extends LandmarkQuery {
  constructor() {
    super();
  }

  createLandmark(landmark: any) {
    return new Landmark(landmark);
  }
}

export { LandmarkService };
