import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';

@Component({
  imports: [],
  templateUrl: './launch-details.page.html',
  styleUrl: './launch-details.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LaunchDetailsPage {
  public readonly id: InputSignal<string> = input.required<string>();
}
