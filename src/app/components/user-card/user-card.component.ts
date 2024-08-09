import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  standalone: true, // Mark as standalone component
})
export class UserCardComponent {
  @Input() user: any;
  @Output() userClick = new EventEmitter<number>();

  onClick() {
    this.userClick.emit(this.user.id);
  }
}
