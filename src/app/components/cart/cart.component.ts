import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCart } from 'src/app/models/product.models';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  cart$: Observable<ProductCart[]>;
  isActive = false;
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  ngOnInit(): void {
    this.cartService.fetchCart();
    this.cart$ = this.cartService.cart$;
  }
  onSubmit() {
    window.alert('Your order has been submitted!');
    this.isActive = false;
  }
  openModal() {
    this.isActive = true;
  }
  closeModal() {
    this.isActive = false;
  }
}
