import { Component, OnInit } from '@angular/core';
import { Category, CategoryButton } from 'src/app/models/category.models';
import { ProductService } from 'src/app/services/product.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.scss'],
})
export class NavCategoryComponent implements OnInit {
  cateButton: CategoryButton[] = [
    { type: Category.Laptop, label: 'Laptop', isActive: true },
    { type: Category.Mouse, label: 'Mouse', isActive: false },
    { type: Category.Pc, label: 'Pc', isActive: false },
  ];
  path: string;
  filterBtn(type: Category, name: string) {
    this.setActiveBtn(type);
    this.productService.setCategory(name);
  }
  private setActiveBtn(type: Category) {
    this.cateButton.forEach((btn) => (btn.isActive = btn.type === type));
  }
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((path) => {
      // if (path instanceof NavigationStart) {
      //   this.path = path.url;
      // }
      if (path instanceof NavigationEnd) {
        this.path = path.url;
      }
      //cham bat su kien khi path thay doi
      // console.log('path', path);
    });
  }
}
