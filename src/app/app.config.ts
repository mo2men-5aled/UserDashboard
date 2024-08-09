import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './state/user/user.reducer';
import { UserEffects } from './state/user/user.effects';
import { HttpClientModule } from '@angular/common/http';

import { importProvidersFrom } from '@angular/core';

export const appConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideStore({ users: userReducer }),
    provideEffects([UserEffects]),
  ],
};
