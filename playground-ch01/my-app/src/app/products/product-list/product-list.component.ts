import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log('HERE:');
      console.log(this.productDetail.product);
    }
  }

  // selectedProduct = 'Microphone';
  // selectedProduct = '';
  // products = ['Webcam', 'Microphone', 'Wireless keyboard'];
  selectedProduct: Product | undefined;
  products: Product[] = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name:
        'Microphone',
      price: 200
    },
    {
      name: 'Wireless keyboard',
      price: 85
    }
  ];

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  trackByProducts(index: number, name: string): string {
    return name;
  }
}
