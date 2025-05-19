import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { state, reset } from './app.actions';
import { AppState } from './app.state';
import { getState } from './app.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{ state$ | async }}</h1>
    <button (click)="onState()">State</button>
    <button (click)="onReset()">Reset</button>
  `,
})
export class AppComponent {
  public state$: Observable<AppState>;

  constructor(private store: Store<{ state: AppState }>) {
    this.state$ = this.store.select(getState);
  }

  onState() {
    this.store.dispatch(state());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
