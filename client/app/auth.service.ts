import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public login(username: string, password: string): Promise<any> {
    return Parse.User.logIn(username, password);
  }
  public logout(): Promise<any> {
    return Parse.User.logOut();
  }
  public isLoggedIn(): boolean {
    return Parse.User.current()?.isCurrent() || false;
  }
  public getUser() {
    return Parse.User.current()?.attributes;
  }
}
