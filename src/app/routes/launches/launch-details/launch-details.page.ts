import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  InputSignal,
  Signal,
} from '@angular/core';

import { LaunchDto } from '@models/launch.dto';
import { RocketDto } from '@models/rocket.dto';
import { PageHeaderComponent } from '@ui/page-header.component';
import { LaunchesRepository } from 'src/app/shared/api/launches.repository';
import { RocketsRepository } from 'src/app/shared/api/rockets.repository';

@Component({
  imports: [DatePipe, CurrencyPipe, PageHeaderComponent],
  templateUrl: './launch-details.page.html',
  styleUrl: './launch-details.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LaunchDetailsPage {
  private readonly launchesRepository = inject(LaunchesRepository);
  private readonly rocketsRepository = inject(RocketsRepository);

  public readonly id: InputSignal<string> = input.required<string>();
  /**
   * The launch object computed from the `id` input signal
   * - Warning: this works because the `find` method is **synchronous**
   * - Returns the launch or the NULL_LAUNCH if the launch is not found
   * - This way we avoid undefined errors
   */
  protected launch: Signal<LaunchDto> = computed(() =>
    this.launchesRepository.getById(this.id()),
  );

  protected readonly title: Signal<string> = computed(
    () => '🚀 ' + this.launch().mission,
  );

  protected readonly subtitle: Signal<string> = computed(
    () => 'launch-details for: ' + this.id(),
  );

  protected readonly isNullDate: Signal<boolean> = computed(
    () =>
      this.launch().date.toDateString() ===
      new Date(1, 1, 1, 0, 0, 0, 0).toDateString(),
  );

  /**
   * The rocket object computed from the launch
   * - Returns the rocket or NULL_ROCKET if the rocket is not found
   * - This way we need to check if the rocket is undefined before using it
   */
  protected rocket: Signal<RocketDto> = computed(() =>
    this.rocketsRepository.getById(this.launch().rocketId),
  );
}
