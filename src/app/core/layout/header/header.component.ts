import { UpperCasePipe } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
  InputSignal,
  Signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthStore } from '@services/auth.store';

@Component({
  selector: 'app-header',
  imports: [UpperCasePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly authStore = inject(AuthStore);

  public readonly title: InputSignal<string> = input.required<string>();
  protected isAuthenticated: Signal<boolean> =
    this.authStore.selectIsAuthenticated;

  protected logout() {
    this.authStore.dispatchLogout();
  }
}
