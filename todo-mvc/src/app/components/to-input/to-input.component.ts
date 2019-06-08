import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-input',
  templateUrl: './to-input.component.html',
  styleUrls: ['./to-input.component.scss']
})
export class ToInputComponent implements OnInit {

  public todoContent = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(){
    if (this.todoContent.trim() === '') {
      return false;
    }

    this.todoService.addTodo(this.todoContent);
    this.todoContent = '';
  }
}
