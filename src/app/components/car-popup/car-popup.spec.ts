import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarPopup } from './car-popup';

describe('CarPopup', () => {
  let component: CarPopup;
  let fixture: ComponentFixture<CarPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(CarPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
