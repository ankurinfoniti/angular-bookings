import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink, FormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPage {
  protected email: string = 'a@b.c';
  protected password: string = '';

  protected login(): void {
    const loginDto = {
      email: this.email,
      password: this.password,
    };
    console.log('Login: ', loginDto);
  }
}
