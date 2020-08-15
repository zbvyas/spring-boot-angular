import { Injectable } from '@angular/core';

// NOTE: This is only in place until we setup JWT, BasicAuthentication!!!

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    return (username === 'defaultusername' && password == 'dummy');
  }
}
