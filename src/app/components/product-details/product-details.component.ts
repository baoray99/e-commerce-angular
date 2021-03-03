import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/models/product.models';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  product: ProductCart;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productId'));
    this.productService
      .getProductById(productIdFromRoute)
      .subscribe((data) => (this.product = data));
  }
  addToCart() {
    this.cartService.addTocart(this.product);
  }
}
