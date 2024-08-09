import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../../state/user/user.model';
import { loadUsers } from '../../state/user/user.actions';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() users$!: Observable<User[]>;
  @Output() userSelected = new EventEmitter<number>();
  currentPage: number = 1;

  constructor(private store: Store) {}

  ngOnInit() {
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number) {
    this.store.dispatch(loadUsers({ page }));
  }

  nextPage() {
    this.currentPage++;
    this.loadUsers(this.currentPage);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers(this.currentPage);
    }
  }

  onUserClick(userId: number) {
    this.userSelected.emit(userId);
  }
}
