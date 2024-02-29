import { createAction, props } from '@ngrx/store';

export const loadTodos = createAction('[Todo] Load Todos');
export const setTodos = createAction('[Todo] Set Todos', props<{ todos: any[] }>());