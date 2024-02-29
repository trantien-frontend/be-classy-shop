import { Category } from ".";

export interface Product {
  id: number | string;
  productName: string;
  productPrice: number;
  productImage: string;
  category: Category;
  productType: ProductType;
  Sizes: Size[];
  Colors: Color[];
}

export interface Products {
  content: Product[];
  pageable?: Pagination;
}

export interface ProductType {
  id?: number | string;
  productTypeName?: string;
}

export interface Size {
  id?: number | string;
  sizeName?: string;
}

export interface Color {
  id?: number | string;
  colorName?: string;
}

export interface Pagination {
  pageNumber?: number;
  pageSize?: number;
  totalElements?: number;
}

export interface Params {
  page?: string | number;
  limit?: string | number;
}
