import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [],
  selector: 'app-car-popup',
  styleUrl: './car-popup.css',
  templateUrl: './car-popup.html',
})
export class CarPopup {
  @Input() auto!: Auto                   // parent → enfant
  @Output() onClose = new EventEmitter<void>() // enfant → parent

  close() {
    this.onClose.emit()
  }
}