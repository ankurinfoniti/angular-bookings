import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  Signal,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink, FormsModule],
  templateUrl: './register.page.html',
  styleUrl: './register.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterPage {
  protected readonly username: WritableSignal<string> = signal('');
  protected readonly email: WritableSignal<string> = signal('');
  protected readonly password: WritableSignal<string> = signal('');
  protected readonly confirmPassword: WritableSignal<string> = signal('');

  protected readonly modelInvalid = (model: NgModel): boolean | undefined => {
    if (!model.touched) {
      return undefined;
    }

    return model.invalid === true;
  };

  protected readonly confirmPasswordModel = viewChild<NgModel>(
    'confirmPasswordModel',
  );

  private readonly passwordsMatches: Signal<boolean> = computed(
    () => this.password() === this.confirmPassword(),
  );

  private passwordValidationEffect = effect(() => {
    const model = this.confirmPasswordModel();

    if (!model) {
      return;
    }

    const control = model.control;

    if (this.passwordsMatches()) {
      control.setErrors(null);
    } else {
      control.setErrors({ passwordMismatch: true });
    }
  });

  protected register(): void {
    const registerDto = {
      username: this.username(),
      email: this.email(),
      password: this.password(),
    };
    console.log('Register: ', registerDto);
  }
}
