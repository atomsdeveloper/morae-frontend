// Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

// Types
import { Reserves } from '../state/app.state';

@Injectable({
  providedIn: 'root',
})
export class ReservesService {
  private apiUrl = 'http://localhost:3000/reserves';

  constructor(private http: HttpClient) {}

  getReserves(): Observable<Reserves[]> {
    return this.http
      .get<{ success: boolean; message: string; data: Reserves[] }>(this.apiUrl)
      .pipe(
        map((response) => {
          console.log(response); // Remopve this line
          return response.data;
        })
      );
  }
}
