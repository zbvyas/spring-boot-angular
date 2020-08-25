import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo$:    Observable<Todo> = of<Todo>();
  onSave$:  Observable<any> = of<any>();

  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.todo$ = this.todoService.retrieveTodo('defaultusername', id).pipe(
      tap(data => this.todo = data)
    );
  }

  saveTodo() {
    this.onSave$ = this.todoService.saveTodo('defaultusername', this.todo).pipe(
      tap(success => this.router.navigate(['todos']))
    )
  }

}
