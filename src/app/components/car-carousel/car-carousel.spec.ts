import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarCarousel } from './car-carousel';

describe('CarCarousel', () => {
  let component: CarCarousel;
  let fixture: ComponentFixture<CarCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(CarCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
