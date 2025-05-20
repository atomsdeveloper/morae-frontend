// Modules
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Icons
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <section>
      <fa-icon class="icon-search" [icon]="faMagnifyingGlass" />
      <input
        type="text"
        name="share"
        id="share"
        placeholder="Enter Address, rooms or price... "
      />
    </section>
  `,
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  faMagnifyingGlass = faMagnifyingGlass;
}
