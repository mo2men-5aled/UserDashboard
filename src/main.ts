import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component'; // Import your main component
import { UserEffects } from './app/state/user/user.effects'; // Your effects

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      EffectsModule.forRoot([UserEffects]) // Provide effects
    ),
    provideRouter(routes), // Provide routing configuration
  ],
}).catch((err) => console.error(err));
