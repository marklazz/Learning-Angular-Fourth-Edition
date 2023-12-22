import { Component, Input, Output, OnInit, EventEmitter, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() name = '';
  @Output() bought = new EventEmitter<string>();
  @Input() product: Product | undefined;

  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }

  ngOnInit(): void {
    console.log(`Name is ${this.name} in the ngOnInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log('Product changed from ${oldValue} to ${newValue}');
    }
  }

  buy() {
    this.bought.emit(this.name);
  }
}
