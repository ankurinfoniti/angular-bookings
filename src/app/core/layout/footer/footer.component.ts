import {
  Component,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';

import { Author } from './author.type';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public readonly appName: InputSignal<string> = input<string>('Initial value');
  protected version: string = 'Angular 19';
  protected year: number = new Date().getFullYear();
  protected author: Author = {
    name: 'Ankur Mishra',
    url: 'https://github.com/ankurinfoniti',
  };
  protected cookiesAccepted: WritableSignal<boolean> = signal<boolean>(false);

  protected acceptCookies() {
    this.cookiesAccepted.set(true);
  }
}
