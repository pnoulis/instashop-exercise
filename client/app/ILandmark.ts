export interface ILandmark {
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
