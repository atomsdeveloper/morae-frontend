// Modules
import { Component, OnDestroy } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { Subscription } from 'rxjs';

// Components
import { NavComponent } from '../nav/nav.component';
import { MenuMobileComponent } from '../mobile/mobile.component';

// Services
import { MediaQueryService } from '../../services/media-query.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, MenuMobileComponent, NgIf],
  template: `
    <header>
      <div [class.is-mobile]="isMobile">
        <a routerLink="/">
          <img src="atomo.png" alt="Logo do meu site" width="50" height="50" />
        </a>
        <!-- Menu from Mobile -->
        <ng-container *ngIf="isMobile; else desktopNav">
          <app-menu-mobile></app-menu-mobile>
        </ng-container>

        <!-- Menu from Desktop -->
        <ng-template #desktopNav>
          <app-nav></app-nav>
        </ng-template>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  isMobile = false;
  private sub: Subscription;

  constructor(private mediaQueryService: MediaQueryService) {
    this.sub = this.mediaQueryService.isMobile$.subscribe((matches) => {
      this.isMobile = matches;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
