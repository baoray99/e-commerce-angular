import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCart } from 'src/app/models/product.models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cart$: Observable<ProductCart[]>;
  ngOnInit(): void {
    this.cartService.fetchCart();
    this.cart$ = this.cartService.cart$;
  }
}
