import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientNeedsComponent } from './client-needs.component';

describe('ClientNeedsComponent', () => {
  let component: ClientNeedsComponent;
  let fixture: ComponentFixture<ClientNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientNeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
