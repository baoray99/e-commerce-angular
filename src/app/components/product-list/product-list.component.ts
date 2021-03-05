import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products: Product[];
  isLoading = false;
  ngOnInit(): void {
    this.startProduct();
  }
  startProduct() {
    this.isLoading = true;
    this.productService
      .getProducts()
      .subscribe((data) => ((this.products = data), (this.isLoading = false)));
    if (this.productService.setCategory) {
      this.changeProduct();
    }
  }
  changeProduct() {
    this.productService.e.subscribe((res) => {
      this.products = res;
    });
  }
}
