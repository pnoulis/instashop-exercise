import Parse from 'parse';
import { ILandmark } from './ILandmark';

class Landmark implements ILandmark {
  public id: string = '';
  public title: string;
  public short_info: string;
  public description: string;
  public order: number;
  public photo_thumb: string;
  public photo: string;
  public url: string;
  public location: Array<number>;

  constructor(landmark: ILandmark) {
    this.id = landmark.id;
    this.title = landmark.title;
    this.short_info = landmark.short_info;
    this.description = landmark.description;
    this.order = +landmark.order;
    this.photo_thumb = landmark.photo_thumb;
    this.photo = landmark.photo;
    this.url = landmark.url;
    this.location = landmark.location;
  }
}

export { Landmark };
