import { Injectable, inject } from '@angular/core';
import { LandmarkQuery } from './LandmarkQuery';
import { ILandmark } from './ILandmark';
import { Landmark } from './Landmark';
import Parse from 'parse';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
class LandmarkService extends LandmarkQuery {
  constructor() {
    super();
  }

  authService: AuthService = inject(AuthService);

  public createLandmark(landmark: any) {
    return new Landmark(landmark);
  }

  public async updateLandmark(landmark: object) {
    const _landmark = this.createLandmark(landmark);
    const user = this.authService.getUser();
    await new Parse.Object('Landmark', _landmark).save(null, {
      sessionToken: user?.['sessionToken'],
    });
    alert('saved!');
    return _landmark;
  }

  public async getAllLandmarks() {
    return super.getAll();
  }

  public async searchLandmark(key: string, value: string | null) {
    return value ? super.search(key, value) : super.getAll();
  }
}

export { LandmarkService };
