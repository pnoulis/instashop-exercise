import { Query } from './Query';
import { ILandmark } from './ILandmark';
import { environment } from '../../env.angular';

class LandmarkQuery extends Query {
  constructor() {
    super('Landmark');
  }

  getAll(): Promise<ILandmark[]> {
    return new LandmarkQuery().find<ILandmark>();
  }

  search(key: string, value: string | null): Promise<ILandmark[]> {
    if (arguments.length === 1) {
      value = key;
      key = 'title';
    }

    if (!(key && value)) {
      throw new TypeError('LandmarkQuery.search() missing arguments');
    }

    //////////////////////////////////////////////////
    // 1st approach
    //////////////////////////////////////////////////
    // return new LandmarkQuery().startsWith(key, value).find<ILandmark>();
    // case Sensitive

    //////////////////////////////////////////////////
    // 2nd approarch
    //////////////////////////////////////////////////
    // return new LandmarkQuery().fullText(key, value).find<ILandmark>();
    // case Insensitive, but returns erroneous results.
    // For example:
    // When searching for burj
    // It returns with the following landmarks:

    /*
      [ { title: "Burj Khalif" }, { title: "Burj Al Arab" }, { title: "Princess town", }, { title: "Cayan Tower" }]
     */
    // This is obviously wrong

    //////////////////////////////////////////////////
    // 3rd approarch
    //////////////////////////////////////////////////
    // This approach deals with the flaws of the previous approaches
    // But does not take advantage of indexing so it will be much
    // slower
    // const titleRe = new RegExp(value, 'i');
    // return new LandmarkQuery()
    //   .find<ILandmark>()
    //   .then((landmarks: ILandmark[]) =>
    //     landmarks.filter((landmark: ILandmark) => titleRe.test(landmark.title)),
    //   );

    //////////////////////////////////////////////////
    // 4th approach
    //////////////////////////////////////////////////
    const url = new URL(`${environment.PUBLIC_SERVER_URL}/classes/Landmark`);
    url.searchParams.append(
      'where',
      JSON.stringify({
        title: {
          $regex: value,
          $options: 'i',
        },
      }),
    );

    return fetch(url.href, {
      method: 'GET',
      headers: {
        ['Content-Type']: 'application/x-www-form-urlencoded;charset=UTF-8',
        ['X-Parse-Application-Id']: environment.APP_ID,
      },
    })
      .then((res) => res.json())
      .then((res) => res.results);
  }
}

export { LandmarkQuery };
