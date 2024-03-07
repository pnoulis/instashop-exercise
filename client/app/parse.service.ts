import { Injectable } from '@angular/core';
import Parse from 'parse';
import { environment as env } from 'env.angular';

@Injectable({
  providedIn: 'root',
})
export class ParseService {
  Parse: any = Parse;
  public initialize() {
    Parse.initialize(env.APP_ID, '', env.MASTER_KEY);
    Parse.serverURL = env.PUBLIC_SERVER_URL;
    return this.Parse;
  }
}
