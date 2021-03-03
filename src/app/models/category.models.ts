export interface CategoryButton {
  type: Category;
  label: string;
  isActive: boolean;
}
export enum Category {
  Laptop,
  Pc,
  Mouse,
}
