import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedIn = false;

  constructor() { }

  loginAsGuest(): boolean {
    if (this.loggedIn == false) {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', String(true));
    }
    return this.loggedIn;
  }
}
