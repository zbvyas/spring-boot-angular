import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'defaultusername'
  password = ''
  errorMessage = 'Invalid Credentials'
  validLogin = true
  
  onAuth$: Observable<any> = of<any>();

  constructor(
    private router: Router,
    private basicAuthService: BasicAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    this.onAuth$ = this.basicAuthService.executeBasicAuthentication(this.username, this.password).pipe(
      tap(
        success => {
          // route to welcome
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          this.validLogin = false;
        }
      )
    )
  }

}
