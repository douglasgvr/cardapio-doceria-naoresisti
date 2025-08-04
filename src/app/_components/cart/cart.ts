import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
// Update the path below to the correct location of BadgeComponent
import { BadgeComponent } from '../badge/badge';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, BadgeComponent, ButtonComponent],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss'],
})
export class CartComponent {
  @Input() cart: any[] = [];
  @Input() isCartOpen = false;

  @Output() toggleCart = new EventEmitter<void>();
  @Output() updateQuantity = new EventEmitter<{
    id: number;
    quantity: number;
  }>();
  @Output() finishOrder = new EventEmitter<void>();

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getTotalItems(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  onUpdateQuantity(id: number, quantity: number) {
    this.updateQuantity.emit({ id, quantity });
  }
}
