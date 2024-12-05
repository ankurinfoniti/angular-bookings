import { UpperCasePipe } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [UpperCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public readonly title: InputSignal<string> = input.required<string>();
}
