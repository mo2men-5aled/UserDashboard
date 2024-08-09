import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers, loadUserById } from './state/user/user.actions';
import { AppState, User } from './state/user/user.model';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component'; // Import the UserCardComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    HeaderComponent,
    UserListComponent,
    UserCardComponent,
  ], // Include UserCardComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'UserDashboard';
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select('users');
  }

  ngOnInit() {
    this.store.dispatch(loadUsers({ page: 1 }));
  }

  onSearch(searchTerm: string) {
    const userId = parseInt(searchTerm, 10);
    if (!isNaN(userId)) {
      this.store.dispatch(loadUserById({ id: userId }));
    }
  }

  onUserSelected(userId: number) {
    this.store.dispatch(loadUserById({ id: userId }));
  }
}
