import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NavCategoryComponent } from './components/nav-category/nav-category.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { BacktopComponent } from './components/backtop/backtop.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'checkout', component: CartComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NavCategoryComponent,
    ProductItemComponent,
    CartComponent,
    FooterComponent,
    CartItemComponent,
    BacktopComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
