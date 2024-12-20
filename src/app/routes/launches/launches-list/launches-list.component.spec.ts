import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesListComponent } from './launches-list.component';

describe('LaunchesListComponent', () => {
  let component: LaunchesListComponent;
  let fixture: ComponentFixture<LaunchesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
