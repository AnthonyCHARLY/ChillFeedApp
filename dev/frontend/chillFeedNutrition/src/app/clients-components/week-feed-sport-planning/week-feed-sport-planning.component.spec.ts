import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekFeedSportPlanningComponent } from './week-feed-sport-planning.component';

describe('WeekFeedSportPlanningComponent', () => {
  let component: WeekFeedSportPlanningComponent;
  let fixture: ComponentFixture<WeekFeedSportPlanningComponent>; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekFeedSportPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekFeedSportPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
