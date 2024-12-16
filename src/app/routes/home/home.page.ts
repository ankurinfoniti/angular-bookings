import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LaunchDto } from '@models/launch.dto';
import { PageHeaderComponent } from '@ui/page-header.component';
import { LaunchesRepository } from 'src/app/shared/api/launches.repository';
import { LaunchesListComponent } from '../launches/launches-list/launches-list.component';

@Component({
  imports: [PageHeaderComponent, LaunchesListComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly launchesRepository = inject(LaunchesRepository);
  protected readonly title: string = 'Upcoming Launches';
  protected launches: LaunchDto[] = this.launchesRepository.getAll();
}
