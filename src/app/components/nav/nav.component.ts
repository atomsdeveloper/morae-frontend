// Modules
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

// Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
  template: `
    <nav>
      <ul>
        <li *ngFor="let value of liValues">
          <a
            (click)="scrollTo(value.idLink, value.id)"
            [class.active]="activeId === value.id"
          >
            <fa-icon [icon]="value.icon"></fa-icon>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  liValues = [{ id: 0, idLink: 'login', icon: faEllipsisH, text: 'Login' }];

  activeId = 0;

  scrollTo(id: string, valueId: number) {
    this.activeId = valueId;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
