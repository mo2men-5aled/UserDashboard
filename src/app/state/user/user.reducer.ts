// src/app/state/user.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess } from './user.actions';
import { User } from './user.model';

export const initialState: User[] = [];

const _userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => [...users])
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
