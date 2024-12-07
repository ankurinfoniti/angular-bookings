import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailsPage } from './launch-details.page';

describe('LaunchDetailsPage', () => {
  let component: LaunchDetailsPage;
  let fixture: ComponentFixture<LaunchDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
