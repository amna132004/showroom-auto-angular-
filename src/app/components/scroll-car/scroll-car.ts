import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-scroll-car',
  styleUrl: './scroll-car.css',
  templateUrl: './scroll-car.html',
})
export class ScrollCar implements OnInit {
  position = signal(0);   // 0 = top, 100 = bottom

  ngOnInit() {
    this.onScroll();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onScroll() {
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    const total = document.documentElement.scrollHeight - window.innerHeight;

    if (total > 0) {
      let percent = (scrolled / total) * 100;
      if (percent < 0) percent = 0;       // never go above the line
      if (percent > 100) percent = 100;   // never go below the line
      this.position.set(percent);
    }
  }
}