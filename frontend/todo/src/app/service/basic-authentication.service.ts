import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeBasicAuthentication(username, password): Observable<any> {
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({ Authorization: basicAuthHeader });
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, { headers }).pipe(
      map(data => {
        sessionStorage.setItem('authenticateUser', username);
        sessionStorage.setItem('token', basicAuthHeader);
        return data;
      })
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticateUser');
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean {
  constructor(public message: string){}
}