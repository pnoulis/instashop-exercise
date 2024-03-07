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

  public createLandmark(landmark: any) {
    return new Landmark(landmark);
  }

  public async updateLandmark(landmark: object) {
    const ln = this.createLandmark(landmark);
    try {
      await ln.save();
    } catch (err: any) {
      if (err.code === 119) {
        throw new Error('Must login first', { cause: err });
      }
      throw err;
    }
    return ln;
  }

  public async getAllLandmarks() {
    return super.getAll();
  }

  public async searchLandmark(key: string, value: string | null) {
    return value ? super.search(key, value) : super.getAll();
  }
}

export { LandmarkService };
