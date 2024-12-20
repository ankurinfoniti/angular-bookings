import {
  computed,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';

import { AuthRepository } from '@api/auth.repository';
import { LoginDto } from '@models/login.dto';
import { RegisterDto } from '@models/register.dto';
import { NULL_USER_TOKEN, UserTokenDto } from '@models/user-token.dto';

type Trigger =
  { type: 'LOGIN'; payload: LoginDto }
  | { type: 'REGISTER'; payload: RegisterDto };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authRepository: AuthRepository = inject(AuthRepository);
  private readonly trigger: WritableSignal<Trigger | undefined> = signal<
    Trigger | undefined
  >(undefined);

  private readonly authResource = rxResource({
    request: () => this.trigger(),
    loader: (param) => {
      const trigger = param.request;
      if (!trigger) return of(NULL_USER_TOKEN);
      switch (trigger.type) {
        case 'LOGIN':
          return this.login$(trigger.payload);
        case 'REGISTER':
          return this.register$(trigger.payload);
      }
    },
  });

  public readonly result: Signal<string> = computed(() => {
    const value: UserTokenDto | undefined = this.authResource.value();
    if (value?.accessToken) {
      return 'logged in';
    }
    const error: unknown = this.authResource.error();
    return (error as { message?: string }).message || 'unknown';
  });

  public login(loginDto: LoginDto): void {
    this.trigger.set({ type: 'LOGIN', payload: loginDto });
  }

  public register(registerDto: RegisterDto): void {
    this.trigger.set({ type: 'REGISTER', payload: registerDto });
  }

  private login$ = (
    loginDto: LoginDto | undefined,
  ): Observable<UserTokenDto> => {
    if (!loginDto || !loginDto.email || !loginDto.password)
      return of(NULL_USER_TOKEN);
    return this.authRepository.postLogin$(loginDto);
  };

  private register$ = (
    registerDto: RegisterDto | undefined,
  ): Observable<UserTokenDto> => {
    if (!registerDto || !registerDto.email || !registerDto.password)
      return of(NULL_USER_TOKEN);
    return this.authRepository.postRegister$(registerDto);
  };
}
