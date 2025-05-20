// Modules
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  imports: [FontAwesomeModule],
  template: `
    <div class="container-search">
      <fa-icon class="icon-search" [icon]="faMagnifyingGlass" />
      <input
        type="text"
        name="share"
        id="share"
        placeholder="Enter Address, rooms or price... "
        class="input-search"
      />
    </div>
  `,
  styleUrl: './search.component.css',
})
export class SearchComponent {
  faMagnifyingGlass = faMagnifyingGlass;
}
