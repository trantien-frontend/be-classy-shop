import { useEffect, useState } from "react";
import AsideCategory from "../../Components/AsideCategory/AsideCategory";
import ProductFilter from "../../Components/ProductFilter/ProductFilter";
import ProductList from "../../Components/ProductList/ProductList";
import { useQuery } from "@tanstack/react-query";
import { productApi } from "../../../../apis/ProductApi";
import { useSearchParams } from "react-router-dom";
import {
  Pagination as PaginationType,
  Product,
  Products,
} from "../../../../types";
import { Pagination } from "../../Components/Pagination/Pagination";

export interface ProductPageProps {}

export function ProductPage({}: ProductPageProps) {
  const [searchParams] = useSearchParams();
  const searchParamObject = Object.fromEntries([...searchParams]);

  let _page = Number(searchParamObject.page) || 0;
  const limit = Number(searchParamObject.limit) || 3;

  const [page, setPage] = useState<number>(_page);

  const { data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () => productApi.getAll({ page, limit }),
  });

  let products: Product[] = [];
  let pagination: PaginationType = {};

  if (!isLoading) {
    let { data: productData }: Products | any = data;
    products = [...productData.content];
    pagination = { ...productData.pageable };
  }

  const handelPageChange = (_page: number) => {
    setPage(_page);
    searchParams.set("page", _page.toString());
  };

  return (
    <div>
      <section className="py-5">
        <div className="container mx-auto">
          <div className="flex gap-2">
            <div className="aside-category basis-1/5">
              <AsideCategory />
            </div>
            <div className="product-list basis-4/5">
              <ProductFilter />
              {!isLoading && <ProductList products={products} />}
              {!isLoading && products.length > 0 && (
                <Pagination
                  pagination={pagination}
                  onClick={(_page) => handelPageChange(_page)}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
