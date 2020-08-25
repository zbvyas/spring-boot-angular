import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  saveTodo(username: string, todo: Todo) {
    if(todo.id) {
      return this.http.put(`${API_URL}/users/${username}/todos/${todo.id}`, todo);
    } else {
      return this.http.post(`${API_URL}/users/${username}/todos`, todo);
    }
  }

}
