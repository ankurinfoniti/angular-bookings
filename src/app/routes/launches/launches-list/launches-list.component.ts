import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { LaunchDto } from '@models/launch.dto';

@Component({
  selector: 'app-launches-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './launches-list.component.html',
  styleUrl: './launches-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesListComponent {
  public readonly launches: InputSignal<LaunchDto[]> =
    input.required<LaunchDto[]>();
}
