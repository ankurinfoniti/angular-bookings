import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { LaunchDto } from '@models/launch.dto';

@Injectable({
  providedIn: 'root',
})
export class LaunchesRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;
  private readonly launchesEndpoint = `${this.apiUrl}/launches`;

  public getAll$ = (): Observable<LaunchDto[]> =>
    this.http.get<LaunchDto[]>(this.launchesEndpoint);

  public getById$ = (id: string): Observable<LaunchDto> =>
    this.http.get<LaunchDto>(`${this.launchesEndpoint}/${id}`);
}
