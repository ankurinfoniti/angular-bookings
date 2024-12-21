import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { AuthRepository } from '@api/auth.repository';
import { LoginDto, NULL_LOGIN_DTO } from '@models/login.dto';
import { NULL_USER_TOKEN } from '@models/user-token.dto';
import { AuthStore } from '@services/auth.store';
import { PageHeaderComponent } from '@ui/page-header.component';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  imports: [RouterLink, LoginFormComponent, PageHeaderComponent],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPage {
  private readonly authRepository = inject(AuthRepository);
  private readonly authStore = inject(AuthStore);

  private readonly loginDto: WritableSignal<LoginDto> =
    signal<LoginDto>(NULL_LOGIN_DTO);

  private readonly loginResource = rxResource({
    request: () => this.loginDto(),
    loader: (param) => this.authRepository.postLogin$(param.request),
  });

  private readonly storeEffect = effect(() => {
    const userToken = this.loginResource.value();

    if (!userToken || userToken === NULL_USER_TOKEN) {
      this.authStore.dispatchLogout();
    } else {
      this.authStore.dispatchLogin(userToken);
    }
  });

  protected login(loginDto: LoginDto) {
    console.log(loginDto);
    this.loginDto.set(loginDto);
  }
}
