import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { AppReducer } from './app.reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ state: AppReducer }),
    AppComponent,
  ],
  providers: [],
})
export class AppModule {}
