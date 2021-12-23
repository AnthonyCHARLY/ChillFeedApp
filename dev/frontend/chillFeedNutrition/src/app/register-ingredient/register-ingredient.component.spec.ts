import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIngredientComponent } from './register-ingredient.component';

describe('RegisterIngredientComponent', () => {
  let component: RegisterIngredientComponent;
  let fixture: ComponentFixture<RegisterIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
