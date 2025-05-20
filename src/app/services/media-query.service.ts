// media-query.service.ts
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEventPattern, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MediaQueryService {
  private mediaQueryList: MediaQueryList;
  private mediaQuerySubject: BehaviorSubject<boolean>;

  constructor(private ngZone: NgZone) {
    this.mediaQueryList = window.matchMedia('(max-width: 30rem)');
    this.mediaQuerySubject = new BehaviorSubject(this.mediaQueryList.matches);

    // Listener da media query
    const listener = (event: MediaQueryListEvent) => {
      this.ngZone.run(() => {
        this.mediaQuerySubject.next(event.matches);
      });
    };

    this.mediaQueryList.addEventListener('change', listener);
  }

  get isMobile$(): Observable<boolean> {
    return this.mediaQuerySubject.asObservable();
  }
}
