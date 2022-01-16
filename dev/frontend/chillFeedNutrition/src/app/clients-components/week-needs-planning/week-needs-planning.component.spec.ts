import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekNeedsPlanningComponent } from './week-needs-planning.component';

describe('WeekNeedsPlanningComponent', () => {
  let component: WeekNeedsPlanningComponent;
  let fixture: ComponentFixture<WeekNeedsPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekNeedsPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekNeedsPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
