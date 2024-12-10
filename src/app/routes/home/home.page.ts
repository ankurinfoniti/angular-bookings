import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LAUNCHES } from '../../shared/data/launches.data';
import { LaunchDto } from '../../shared/models/launch.dto';

@Component({
  imports: [DatePipe, RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected launches: LaunchDto[] = LAUNCHES;
}
