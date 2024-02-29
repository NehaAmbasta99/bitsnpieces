import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import * as TodoActions from './actions';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.loadTodos),
    mergeMap(() => this.dataService.getTodos()
      .pipe(
        map(todos => TodoActions.setTodos({ todos })),
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
