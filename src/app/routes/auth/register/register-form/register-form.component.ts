import {
  Component,
  computed,
  effect,
  inject,
  output,
  OutputEmitterRef,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { RegisterDto } from '@models/register.dto';
import { FormsService } from '@services/forms.service';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  private readonly formsService = inject(FormsService);

  public readonly register: OutputEmitterRef<RegisterDto> =
    output<RegisterDto>();

  protected readonly username: WritableSignal<string> = signal('');
  protected readonly email: WritableSignal<string> = signal('');
  protected readonly password: WritableSignal<string> = signal('');
  protected readonly confirmPassword: WritableSignal<string> = signal('');

  protected readonly modelInvalid = (model: NgModel): boolean | undefined =>
    this.formsService.modelInvalid(model);

  protected readonly confirmPasswordModel = viewChild<NgModel>(
    'confirmPasswordModel',
  );

  private readonly passwordsMatches = computed(
    () => this.password() === this.confirmPassword(),
  );

  private passwordValidationEffect = effect(() => {
    const model = this.confirmPasswordModel();
    if (!model) return;
    const control = model.control;
    if (this.passwordsMatches()) {
      control.setErrors(null);
    } else {
      control.setErrors({ passwordMismatch: true });
    }
  });

  protected submit(): void {
    const registerDto: RegisterDto = {
      username: this.username(),
      email: this.email(),
      password: this.password(),
    };
    this.register.emit(registerDto);
  }
}
