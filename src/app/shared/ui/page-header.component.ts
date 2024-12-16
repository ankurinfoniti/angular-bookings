import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';

@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="page-header">
      <h2>{{ title() }}</h2>
      @if (subtitle()) {
        <p>{{ subtitle() }}</p>
      }
    </header>
  `,
})
export class PageHeaderComponent {
  public readonly title: InputSignal<string> = input.required();
  public readonly subtitle: InputSignal<string | undefined> = input();
}
