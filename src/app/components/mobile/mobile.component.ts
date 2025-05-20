// Modules
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faUserAlt,
  faSearch,
  faBuilding,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [NgFor, FontAwesomeModule],
  template: `
    <nav>
      <ul>
        <li
          *ngFor="let item of liValues; let i = index"
          [class.active]="activeId === item.id"
        >
          <a (click)="setActive(item.id)" [href]="'#' + item.idLink">
            <span class="icon">
              <fa-icon [icon]="item.icon"></fa-icon>
            </span>
            <span class="text">{{ item.text }}</span>
          </a>
        </li>
        <!-- <li class="indicater"></li> -->
      </ul>
    </nav>
  `,
  styleUrls: ['./mobile.component.css'],
})
export class MenuMobileComponent {
  activeId = 0;

  liValues = [
    { id: 0, text: 'Home', icon: faHome, idLink: 'home' },
    { id: 1, text: 'Search', icon: faSearch, idLink: 'search' },
    { id: 2, text: 'Reserves', icon: faBuilding, idLink: 'reserves' },
    { id: 3, text: 'User', icon: faUserAlt, idLink: 'user' },
    { id: 3, text: 'More', icon: faEllipsisH, idLink: 'more' },
  ];

  setActive(id: number) {
    this.activeId = id;
  }
}
