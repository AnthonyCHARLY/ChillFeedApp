import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReceiptsComponent } from './register-receipts.component';

describe('RegisterReceiptsComponent', () => {
  let component: RegisterReceiptsComponent;
  let fixture: ComponentFixture<RegisterReceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterReceiptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
