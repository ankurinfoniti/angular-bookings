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
import { rxResource } from '@angular/core/rxjs-interop';

import { LaunchDto, NULL_LAUNCH } from '@models/launch.dto';
import { NULL_ROCKET, RocketDto } from '@models/rocket.dto';
import { AuthStore } from '@services/auth.store';
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
  private readonly authStore = inject(AuthStore);
  public readonly id: InputSignal<string> = input.required<string>();

  protected readonly launchResource = rxResource({
    request: () => this.id(),
    loader: (param) => this.launchesRepository.getById$(param.request),
  });

  protected readonly launch: Signal<LaunchDto> = computed(
    () => this.launchResource.value() || NULL_LAUNCH,
  );

  protected readonly title: Signal<string> = computed(
    () => '🚀 ' + this.launch().mission,
  );

  protected readonly subtitle: Signal<string> = computed(
    () => 'launch-details for: ' + this.id(),
  );

  protected readonly rocketResource = rxResource({
    request: () => this.launch().rocketId,
    loader: (param) => this.rocketsRepository.getById$(param.request),
  });

  protected readonly rocket: Signal<RocketDto> = computed(
    () => this.rocketResource.value() || NULL_ROCKET,
  );

  protected readonly isLoggedIn: Signal<boolean> =
    this.authStore.selectIsAuthenticated;

  protected book() {
    console.log('booking a seat on launch', this.launch().id);
  }
}
