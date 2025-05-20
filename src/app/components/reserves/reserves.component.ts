// Modules
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';

// Services
import { ReservesService } from '../../services/reserves.service';

// Pipes
import { CurrencyBRLPipe } from '../../../pipes/currency-brl.pipe';

// Icons
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reserves',
  standalone: true,
  imports: [FontAwesomeModule, NgIf, NgFor, AsyncPipe, CurrencyBRLPipe],
  template: `
    <section>
      <div>
        <p>Picked for you</p>
        <button>
          <fa-icon class="icon-filters" [icon]="faFilter" />
          Filters
        </button>
      </div>
      <div>
        <div *ngIf="reserves$ | async as reserves">
          <div *ngIf="reserves.length > 0; else noResults">
            <ul>
              <li *ngFor="let reserve of reserves">
                <img
                  [src]="reserve.photos[0].filename"
                  alt="Imagem da reserva {{ reserve.name }}"
                  class="reserve-photo"
                />
                <article>
                  <h3>{{ reserve.name }}</h3>
                  <p>type {{ reserve.type }}</p>
                  <p>rooms {{ reserve.rooms }}</p>
                  <p>price {{ reserve.price | currencyBRL }}</p>
                </article>
              </li>
            </ul>
          </div>
          <ng-template #noResults>
            <p>Nenhuma reserva encontrada.</p>
          </ng-template>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./reserves.component.css'],
})
export class ReservesComponent {
  faFilter = faFilter;
  reserves$: ReturnType<ReservesService['getReserves']>;

  constructor(private reservesService: ReservesService) {
    this.reserves$ = this.reservesService.getReserves();
  }

  ngOnInit(): void {}
}
