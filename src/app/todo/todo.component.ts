import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadTodos } from '../store/actions';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.less',
  animations:[
    trigger('scale',[
    state('normal', style({
      transform: 'scale(1)',
    })),
    state('scaled', style({
      transform: 'scale(1.5)',
    })),
    transition('normal <=> final', animate('300ms ease-in-out'))
  ])
  ]
})
export class TodoComponent {
  todos!: any[];
  todoForm: FormGroup;
  buttonState = 'normal';
  constructor(private store: Store<{ todos: any[] }>, 
    private fb: FormBuilder, 
    private dataService: DataService,
    private route: ActivatedRoute) {
    this.store.select('todos').subscribe(todos => this.todos = todos);
    this.store.dispatch(loadTodos());
    console.log(this.todos);

    this.todoForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  addTodo() {
    const newTodo = { userId: 1, title: this.todoForm.value.title, completed: false };
    this.dataService.addTodo(newTodo).subscribe(() => {
      this.store.dispatch(loadTodos());
      this.todoForm.reset();
    });
  }
  toggleScale() {
    this.buttonState = this.buttonState === 'normal' ? 'scaled' : 'normal';
  }
}
