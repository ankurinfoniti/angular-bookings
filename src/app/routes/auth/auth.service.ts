import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LoginDto } from '@models/login.dto';
import { RegisterDto } from '@models/register.dto';
import { UserTokenDto } from '@models/user-token.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login = (loginDto: LoginDto): Observable<UserTokenDto> => {
    console.log('loginDto', loginDto);
    return of({
      userId: '1',
      token: 'token',
    });
  };

  public register = (registerDto: RegisterDto): Observable<UserTokenDto> => {
    console.log('Register: ', registerDto);
    return of({ userId: '1', token: 'token' });
  };
}
