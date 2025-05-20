// Modules
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

// Routes
import { routes } from './app.routes';

// State
import { provideStore } from '@ngrx/store';
import { AppReducer } from './state/app.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ state: AppReducer }), // Define o estado global.
    provideHttpClient(),
  ],
};
