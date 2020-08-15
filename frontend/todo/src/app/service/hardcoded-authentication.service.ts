import { Injectable } from '@angular/core';

// NOTE: This is only in place until we setup JWT, BasicAuthentication!!!

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'defaultusername' && password == 'dummy') {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
  }
}
