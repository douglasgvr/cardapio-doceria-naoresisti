import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTA ESSENCIAL

@Component({
  selector: 'app-product-grid',
  standalone: true,
  templateUrl: './product-grid.html',
  styleUrls: ['./product-grid.scss'],
  imports: [CommonModule], // 👈 ADICIONA AQUI
})
export class ProductGridComponent {
  @Input() products: any[] = [];
  @Input() selectedCategory: string = '';
  @Input() categories: any[] = [];

  @Output() addToCart = new EventEmitter<any>();
  @Output() backToCategories = new EventEmitter<void>();

  get filteredProducts() {
    return this.products.filter((p) => p.category === this.selectedCategory);
  }

  get categoryName(): string {
    return (
      this.categories.find((c) => c.id === this.selectedCategory)?.name || ''
    );
  }

  onAddToCart(product: any) {
    this.addToCart.emit(product);
  }

  onBackToCategories() {
    this.backToCategories.emit();
  }
}
