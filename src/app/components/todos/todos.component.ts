import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Todo one',
        completed: false
      },
      {
        id: 2,
        title: 'Todo two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo three',
        completed: false
      }
    ]
  }

}
