import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoDataService } from '../service/data/todo-data.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos$:     Observable<Todo[]> = of<Todo[]>();
  onCall$:  Observable<Todo> = of<Todo>();

  successMessage = '';

  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Travel abroad', false, new Date())
  // ]

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos$ = this.todoService.retrieveAllTodos('defaultusername');
  }

  deleteTodo(id: number) {
    this.onCall$ = this.todoService.deleteTodo('defaultusername', id).pipe(
      tap(success => {
        this.successMessage = 'Delete Successful!';
        this.getTodos();
      })
    );
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  newTodo() {
    this.router.navigate(['todos', 'new']);
  }

}
