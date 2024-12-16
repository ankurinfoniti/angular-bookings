import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageHeaderComponent } from '@ui/page-header.component';
import { LoginDto } from '@models/login.dto';
import { AuthService } from '../auth.service';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  imports: [RouterLink, LoginFormComponent, PageHeaderComponent],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPage {
  private readonly authService = inject(AuthService);

  protected login(loginDto: LoginDto): void {
    this.authService.login(loginDto).subscribe();
  }
}
