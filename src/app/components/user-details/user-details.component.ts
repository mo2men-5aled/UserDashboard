import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, User } from '../../state/user/user.model';
import { Observable } from 'rxjs';
import { loadUser } from '../../state/user/user.actions';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.user$ = this.store.select((state) =>
      state.users.find((user) => user.id === +this.route.snapshot.params['id'])
    );
  }

  ngOnInit(): void {
    const userId = +this.route.snapshot.params['id'];
    this.store.dispatch(loadUser({ id: userId }));
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
