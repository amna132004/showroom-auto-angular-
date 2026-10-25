import { Component, Input } from '@angular/core';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [],
  selector: 'app-order-form',
  styleUrl: './order-form.css',
  templateUrl: './order-form.html',
})
export class OrderForm {
  @Input() autos: Auto[] = [];   // parent → child
  message = '';

  book(name: string, phone: string, car: string, date: string, time: string) {
    if (name && phone && car && date && time) {
      this.message = `Thank you ${name}! Your visit for ${car} is booked on ${date} at ${time}.`;
    } else {
      this.message = 'Please fill in all the fields.';
    }
  }
}