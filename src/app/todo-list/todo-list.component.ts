import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos$ = new Subject<string[]>()
  input: any;

  constructor(private todoService: TodoService){}
  
  ngOnInit(){
    this.todos$ = this.todoService.items$;
  }

  addTask() {
    this.todoService.addItem(this.input)
    this.input = ""
  }

  removeTask(index:number){
    console.log(index)
    this.todoService.removeItem(index)
  }  
}
