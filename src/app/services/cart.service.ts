import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductCart } from '../models/product.models';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  private static readonly storageKey = 'cart';
  private cart: ProductCart[] = [];
  private displayCart: BehaviorSubject<ProductCart[]> = new BehaviorSubject<
    ProductCart[]
  >([]);
  cart$: Observable<ProductCart[]> = this.displayCart.asObservable();
  constructor(private storageService: StorageService) {}
  updateCart() {
    this.displayCart.next(this.cart);
  }
  updateStorage() {
    this.storageService.storage.setItem(
      CartService.storageKey,
      JSON.stringify(this.cart)
    );
    this.fetchCart();
  }
  fetchCart() {
    this.cart =
      JSON.parse(this.storageService.storage.getItem(CartService.storageKey)) ||
      [];
    this.updateCart();
  }
  ngOnInit() {}

  addTocart(item: ProductCart) {
    const newItem = item;
    this.cart.push(newItem);
    window.alert('Added to cart successfully!');
    this.updateStorage();
  }
  deleteItem(item) {
    const index = this.cart.indexOf(item);
    this.cart.splice(index, 1);
    this.updateStorage();
  }
}
