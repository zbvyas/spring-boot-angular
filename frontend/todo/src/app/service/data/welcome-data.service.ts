import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeBasicAuth(name: string): Observable<HelloWorldBean> {
    //let basicAuth = this.createBasicAuthHttpHeader();
    //let headers = new HttpHeaders({ Authorization: basicAuth });
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }

}
