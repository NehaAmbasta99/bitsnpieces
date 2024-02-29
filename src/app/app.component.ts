import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadTodos } from './store/actions';
import { DataService } from './services/data.service';
import { ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
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
export class AppComponent {
  todos!: any[];
  todoForm: FormGroup;
  isAuthenticated: boolean;
  buttonState = 'normal';
  showTodo: boolean = false;
  constructor(private store: Store<{ todos: any[] }>, 
    private fb: FormBuilder, 
    private dataService: DataService,
    private route: ActivatedRoute) {
    this.isAuthenticated = this.route.snapshot.data['isAuthenticated'];
    this.store.select('todos').subscribe(todos => this.todos = todos);
    this.store.dispatch(loadTodos());

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

  toggleTodo(){
    this.showTodo = !this.showTodo;
  }
}
