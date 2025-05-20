import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// State
import { state, reset } from './state/app.actions';
import { AppState } from './state/app.state';
import { getState } from './state/app.selector';

// Components
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ReservesComponent } from './components/reserves/reserves.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SearchComponent, ReservesComponent],
  template: `
    <app-header />
    <main>
      <!-- <div class="app">
        <app-search />
        <app-reserves />
      </div> -->
    </main>
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
