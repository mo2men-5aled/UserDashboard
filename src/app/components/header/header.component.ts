import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(searchTerm: string) {
    if (searchTerm.trim()) {
      this.search.emit(searchTerm);
    }
  }
}
