import { Component, inject, output, OutputEmitterRef } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { LoginDto } from '@models/login.dto';
import { FormsService } from '@services/forms.service';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  private readonly formsService = inject(FormsService);
  public readonly login: OutputEmitterRef<LoginDto> = output<LoginDto>();

  protected email: string = 'a@b.c';
  protected password: string = '';
  protected readonly modelInvalid = (model: NgModel): boolean | undefined =>
    this.formsService.modelInvalid(model);

  protected submit(): void {
    const loginDto: LoginDto = {
      email: this.email,
      password: this.password,
    };
    this.login.emit(loginDto);
  }
}
