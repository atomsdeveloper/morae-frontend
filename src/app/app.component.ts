import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// State
import { state, reset } from './app.actions';
import { AppState } from './app.state';
import { getState } from './app.selector';

// Components
import { ShareComponent } from './components/share/share.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ShareComponent],
  template: `
    <div>
      <h1 class="text">Olá Mundo</h1>

      <!-- Component Share -->
      <app-share />
    </div>
    <!-- <h1>{{ state$ | async }}</h1>
    <button (click)="onState()">State</button>
    <button (click)="onReset()">Reset</button> -->
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // public state$: Observable<AppState>;
  // constructor(private store: Store<{ state: AppState }>) {
  //   this.state$ = this.store.select(getState);
  // }
  // onState() {
  //   this.store.dispatch(state());
  // }
  // onReset() {
  //   this.store.dispatch(reset());
  // }
}
