export interface Product {
  id: number | string;
  productName: string;
  productPrice: number;
  promotion: number;
  productImage: string;
  productType: productType;
  listSize: size[];
}

export interface productType {
  id: number | string;
  productTypeName: string;
}

export interface size {
  id?: number | string;
  size?: string;
}

export interface Pagination {
  pageNumber?: number;
  pageSize?: number;
  totalElements?: number;
}

export interface Products {
  content: Product[];
  pageable: Pagination;
}

export interface Params {
  page?: string | number;
  limit?: string | number;
}
