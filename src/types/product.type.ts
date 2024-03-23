import { Category } from ".";

export interface Product {
  id: number | string;
  productName: string;
  productPrice: number;
  productImage: string;
  productType: ProductType;
  category: Category;
  Sizes?: Size[];
  Colors?: Color[];
}

export interface Products {
  data: {
    content: Product[];
    pageable?: Pagination;
  };
}

export interface ProductType {
  id?: number | string;
  productTypeName?: string;
}

export interface Size {
  id: number | string;
  sizeName: string;
}

export interface Color {
  id?: number | string;
  colorName?: string;
}

export interface Pagination {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
}

export interface Params {
  page?: string | number;
  limit?: string | number;
}
