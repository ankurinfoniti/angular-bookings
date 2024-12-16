import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeaderComponent } from '@ui/page-header.component';

@Component({
  imports: [PageHeaderComponent],
  templateUrl: './about.page.html',
  styleUrl: './about.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPage {
  protected readonly features = [
    'Astro Bookings is a space travel booking app',
    'It is built with Angular and Astro',
    'It uses Pico.css for styling',
    'It uses RxJS for reactive programming',
  ];

  protected readonly techStack = [
    {
      name: 'Angular',
      url: 'https://angular.dev/',
    },
    {
      name: 'Pico.css',
      url: 'https://picocss.com/',
    },
    {
      name: 'RxJS',
      url: 'https://rxjs.dev/',
    },
  ];
}
