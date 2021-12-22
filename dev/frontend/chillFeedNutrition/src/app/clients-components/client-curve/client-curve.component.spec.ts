import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCurveComponent } from './client-curve.component';

describe('ClientCurveComponent', () => {
  let component: ClientCurveComponent;
  let fixture: ComponentFixture<ClientCurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCurveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
