import { Injectable } from '@angular/core';
import { LandmarkQuery } from './LandmarkQuery';

@Injectable({
  providedIn: 'root',
})
class LandmarkService extends LandmarkQuery {
  constructor() {
    super();
  }
}

export { LandmarkService };
