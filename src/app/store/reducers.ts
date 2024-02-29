import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './actions';

export const initialState: any[] = [];

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.setTodos, (state, { todos }) => todos)
);
