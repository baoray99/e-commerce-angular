import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item;
  isHovered: boolean = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  deleteItem(item){
    this.cartService.deleteItem(item);
  }
}
