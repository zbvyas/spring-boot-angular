import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeader = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if(username && basicAuthHeader) {
      request = request.clone({
        setHeaders: { Authorization: basicAuthHeader }
      });
    }

    return next.handle(request);
  }

}
