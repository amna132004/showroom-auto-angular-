import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollCar } from './scroll-car';

describe('ScrollCar', () => {
  let component: ScrollCar;
  let fixture: ComponentFixture<ScrollCar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollCar],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollCar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
