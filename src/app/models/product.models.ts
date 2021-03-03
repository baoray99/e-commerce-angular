export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}
export class ProductCart {
  constructor(
    public id: string,
    public name: string,
    public price: string,
    public description: string,
    public image: string
  ) {}
}
