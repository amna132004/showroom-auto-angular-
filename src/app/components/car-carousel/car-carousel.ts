import { Component, Input, OnInit, OnDestroy, signal } from '@angular/core';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [],
  selector: 'app-car-carousel',
  styleUrl: './car-carousel.css',
  templateUrl: './car-carousel.html',
})
export class CarCarousel implements OnInit, OnDestroy {
  @Input() autos: Auto[] = [];   // parent → child

  current = signal(0);           // index of the image shown
  timer: any;

  ngOnInit() {
    // every 3000 ms (3 seconds), go to the next image
    this.timer = setInterval(() => {
      this.current.set((this.current() + 1) % this.autos.length);
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);   // stop the timer when the component is removed
  }
}