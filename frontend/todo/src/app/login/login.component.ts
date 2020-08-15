import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    this.invalidLogin = (this.username === 'defaultusername' && this.password == 'dummy');
    if(!this.invalidLogin) {
      // route to welcome
      this.router.navigate(['welcome', this.username]);
    }
  }

}
