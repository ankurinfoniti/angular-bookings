import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageHeaderComponent } from '@ui/page-header.component';
import { RegisterDto } from '@models/register.dto';
import { AuthService } from '../auth.service';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
  imports: [RouterLink, RegisterFormComponent, PageHeaderComponent],
  templateUrl: './register.page.html',
  styleUrl: './register.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterPage {
  private readonly authService = inject(AuthService);
  protected readonly result = this.authService.result;

  protected register(registerDto: RegisterDto): void {
    this.authService.register(registerDto);
  }
}
