import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LoginDto, NULL_LOGIN_DTO } from '@models/login.dto';
import { NULL_REGISTER_DTO, RegisterDto } from '@models/register.dto';
import { NULL_USER_TOKEN, UserTokenDto } from '@models/user-token.dto';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  postLogin$(loginDto: LoginDto): Observable<UserTokenDto> {
    if (loginDto === NULL_LOGIN_DTO) {
      return of(NULL_USER_TOKEN);
    }

    const url = `${this.apiUrl}/login`;

    return this.httpClient.post<UserTokenDto>(url, loginDto);
  }

  postRegister$(registerDto: RegisterDto): Observable<UserTokenDto> {
    if (registerDto === NULL_REGISTER_DTO) {
      return of(NULL_USER_TOKEN);
    }

    const url = `${this.apiUrl}/register`;

    return this.httpClient.post<UserTokenDto>(url, registerDto);
  }
}
