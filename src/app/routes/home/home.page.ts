import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  ResourceRef,
  Signal,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

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

  protected readonly launchesResource: ResourceRef<LaunchDto[]> = rxResource({
    loader: this.launchesRepository.getAll$,
  });

  protected readonly launches: Signal<LaunchDto[]> = computed(
    () => this.launchesResource.value() ?? [],
  );

  protected readonly errorMessage: Signal<string> = computed(
    () =>
      (this.launchesResource.error() as { message: string })['message'] ||
      'Unknown error',
  );
}
