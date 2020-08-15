import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'defaultusername'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(
    private router: Router,
    private hardcodedAuthService: HardcodedAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    this.invalidLogin = this.hardcodedAuthService.authenticate(this.username, this.password);
    if(!this.invalidLogin) {
      // route to welcome
      this.router.navigate(['welcome', this.username]);
    }
  }

}
