import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log('HERE:');
      console.log(this.productDetail.name);
    }
  }

  // selectedProduct = 'Microphone';
  selectedProduct = '';
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  onBuy(name: string) {
    window.alert(`You just bought ${name}!`);
  }
}
