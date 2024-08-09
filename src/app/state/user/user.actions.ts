// src/app/state/user.actions.ts

import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number }>()
);
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

// user
export const loadUser = createAction(
  '[User] Load User',
  props<{ id: number }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[User] Load User Failure',
  props<{ error: any }>()
);

// loadUserById
export const loadUserById = createAction(
  '[User] Load User By Id',
  props<{ id: number }>()
);
