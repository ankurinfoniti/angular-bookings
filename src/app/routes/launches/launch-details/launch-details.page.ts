import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  Signal,
} from '@angular/core';

import { LAUNCHES } from '../../../shared/data/launches.data';
import { LaunchDto, NULL_LAUNCH } from '../../../shared/models/launch.dto';
import { RocketDto } from '../../../shared/models/rocket.dto';
import { ROCKETS } from '../../../shared/data/rockets.data';

@Component({
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './launch-details.page.html',
  styleUrl: './launch-details.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LaunchDetailsPage {
  public readonly id: InputSignal<string> = input.required<string>();
  /**
   * The launch object computed from the `id` input signal
   * - Warning: this works because the `find` method is **synchronous**
   * - Returns the launch or the NULL_LAUNCH if the launch is not found
   * - This way we avoid undefined errors
   */
  protected launch: Signal<LaunchDto> = computed(
    () => LAUNCHES.find((launch) => launch.id === this.id()) || NULL_LAUNCH,
  );

  /**
   * The rocket object computed from the launch
   * - Returns the rocket or undefined if the rocket is not found
   * - This way we need to check if the rocket is undefined before using it
   */
  protected rocket: Signal<RocketDto | undefined> = computed(() =>
    ROCKETS.find((rocket) => rocket.id === this.launch()?.rocketId),
  );
}
