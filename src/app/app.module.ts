// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { AppComponent } from './app.component';

// State
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './app.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ state: AppReducer }),
    AppComponent,
    FontAwesomeModule,
  ],
  providers: [],
})
export class AppModule {}
