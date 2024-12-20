import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { RocketDto } from '@models/rocket.dto';

@Injectable({
  providedIn: 'root',
})
export class RocketsRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;
  private readonly rocketsEndpoint = `${this.apiUrl}/rockets`;

  public getAll$ = (): Observable<RocketDto[]> =>
    this.http.get<RocketDto[]>(this.rocketsEndpoint);

  public getById$ = (id: string): Observable<RocketDto> =>
    this.http.get<RocketDto>(`${this.rocketsEndpoint}/${id}`);
}
