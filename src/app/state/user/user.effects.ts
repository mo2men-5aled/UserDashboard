// // src/app/state/user.effects.ts

// import { inject, Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, mergeMap, of } from 'rxjs';
// import { UserService } from '../../user.service';
// import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';

// @Injectable()
// export class UserEffects {
// loadUsers$ = createEffect(() =>
//   inject(Actions).pipe(
//     ofType(loadUsers),
//     mergeMap((action) =>
//       this.userService.fetchUsers(action.page).pipe(
//         map((response) => loadUsersSuccess({ users: response.data })),
//         catchError((error) => of(loadUsersFailure({ error })))
//       )
//     )
//   )
// );

//   constructor(private actions$: Actions, private userService: UserService) {}
// }

import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from '../../user.service';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
  loadUserById,
  loadUserSuccess,
  loadUserFailure,
} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    inject(Actions).pipe(
      ofType(loadUsers),
      mergeMap((action) =>
        this.userService.fetchUsers(action.page).pipe(
          map((response) => loadUsersSuccess({ users: response.data })),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  loadUserById$ = createEffect(() =>
    inject(Actions).pipe(
      ofType(loadUserById),
      mergeMap(({ id }) =>
        this.userService.fetchUserById(id).pipe(
          map((user) => loadUserSuccess({ user })), // Ensure you handle the user success action correctly
          catchError((error) => of(loadUserFailure({ error })))
        )
      )
    )
  );
}
