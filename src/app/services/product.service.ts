import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Product } from '../models/product.models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
  private readonly apiURL = 'https://603b4200f1d6aa0017a11636.mockapi.io/';
  category = 'laptop';

  e = new BehaviorSubject<Product[]>([]); // cham bat su kien khi thay doi
  // private products: Observable<Product[]>;
  // private filterProducts: Product[];
  // private displayProductsSubject: BehaviorSubject<
  //   Product[]
  // > = new BehaviorSubject<Product[]>([]);
  // products$: Observable<Product[]> = this.displayProductsSubject.asObservable();

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {}
  setCategory(name: string) {
    this.category = name.toLowerCase();
    this.getProducts().subscribe((res) => {
      this.e.next(res);
    });
  }
  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.apiURL + this.category)
      .pipe(catchError(this.errorHandle));
  }
  errorHandle(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
  getProductById(productId: string): Observable<Product> {
    return this.httpClient
      .get<Product>(this.apiURL + this.category + '/' + productId)
      .pipe(catchError(this.errorHandle));
  }
  addHero(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(this.apiURL, product)
      .pipe(catchError(this.errorHandle));
  }

  //if have header then set httpOptions
  //   import { HttpHeaders } from '@angular/common/http';

  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     Authorization: 'my-auth-token'
  //   })
  // };
}
