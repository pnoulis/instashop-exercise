import Parse from 'parse/lib/node/Parse.js';
import { environment as env } from '../env.angular';

Parse.initialize(env.APP_ID, '', env.MASTER_KEY);
Parse.serverURL = env.PUBLIC_SERVER_URL;

interface ILandmark {
  id: string;
  title: string;
  short_info: string;
  description: string;
  order: number;
  photo_thumb: string;
  photo: string;
  url: string;
  location: Array<number>;
  className: string;
}

class Landmark extends Parse.Object implements ILandmark {
  constructor(landmark: Ilandmark = {}) {
    super('Landmark', landmark);
  }

  initialize(landmark: ILandmark, options: object) {
    this.id = landmark.id;
    this.title = landmark.title || '';
    this.short_info = landmark.short_info || '';
    this.description = landmark.description || '';
    this.order = landmark.order || 0;
    this.photo_thumb = landmark.photo_thumb || '';
    this.photo = landmark.photo || '';
    this.url = landmark.url || '';
    this.location = landmark.location || [];
  }
}

// const landmark = new Landmark({ id: 'yolo' });
// debug(landmark);
// const response = await landmark.save();
// debug(response);
