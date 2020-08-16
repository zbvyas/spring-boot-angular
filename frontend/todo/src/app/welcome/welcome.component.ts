import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessage = ''
  errorMessage = ''

  welcome$: Observable<HelloWorldBean> = of<HelloWorldBean>();

  constructor(
    private route: ActivatedRoute,
    private welcomeService: WelcomeDataService
  ) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.welcome$ = this.welcomeService.executeHelloWorldBeanService().pipe(
      tap(
        success => { this.welcomeMessage = success.message },
        error => { this.errorMessage = error.error.message }
      )
    );
  }

  getWelcomeMessageWithParam() {
    this.welcome$ = this.welcomeService.executeHelloWorldBeanServiceWithPathVariable(this.name).pipe(
      tap(
        success => { this.welcomeMessage = success.message },
        error => { this.errorMessage = error.error.message }
      )
    );
  }

}
