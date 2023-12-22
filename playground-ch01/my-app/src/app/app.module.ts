import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { FilterPipe } from './filter.pipe';
// import { ProductListComponent } from './products/product-list/product-list.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
