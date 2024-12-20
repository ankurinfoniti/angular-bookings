import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { LoginDto } from '@models/login.dto';
import { RegisterDto } from '@models/register.dto';
import { UserTokenDto } from '@models/user-token.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  public postLogin$(login: LoginDto): Observable<UserTokenDto> {
    return this.http.post<UserTokenDto>(`${this.apiUrl}/login`, login);
  }

  public postRegister$(register: RegisterDto): Observable<UserTokenDto> {
    return this.http.post<UserTokenDto>(`${this.apiUrl}/register`, register);
  }
}
