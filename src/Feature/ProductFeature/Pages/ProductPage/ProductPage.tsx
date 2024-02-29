import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useSearchParams } from "react-router-dom";

import { productApi } from "../../../../apis/ProductApi";
import {
  AsideCategory,
  ProductFilter,
  ProductList,
  Pagination,
} from "../../Components";
import { Pagination as PaginationType, Product } from "../../../../types";

export interface ProductPageProps {}

function handleURL(path: string): string {
  const listCategory: string[] = ["dress%20shoes", "accessories"];
  const isCategoryURL = listCategory.includes(path.slice(1));
  return isCategoryURL
    ? `products/category${path}`
    : `products/productType${path}`;
}

export function ProductPage({}: ProductPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamObject = Object.fromEntries([...searchParams]);

  const { pathname } = useLocation();
  const url = handleURL(pathname);

  const [params, setParams] = useState({
    page: Number(searchParamObject.page) || 0,
    limit: Number(searchParamObject.limit) || 3,
    sortby: searchParamObject.sortby || "",
  });

  useEffect(() => {
    (() => {
      setSearchParams({ page: `${params.page + 1}`, limit: `${params.limit}` });
    })();
  }, []);

  const { data, isPending } = useQuery({
    queryKey: ["products", params, url],
    queryFn: () => productApi.getAll(url, { ...params }),
  });

  let productList: Product[] = [];
  let pagination: PaginationType = {};

  if (data) {
    const { data: productData } = data;
    productList = productData?.content;
    pagination = productData?.pageable;
  }

  const handelPageChange = (_page: number) => {
    setParams({ ...params, page: _page });
    setSearchParams({ page: `${_page + 1}`, limit: `${params.limit}` });
  };

  const handleFilterChange = (filter: string) => {
    setParams({ ...params, sortby: filter });
    setSearchParams({
      page: `${params.page}`,
      limit: `${params.limit}`,
      sortby: params.sortby,
    });
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
              <ProductFilter onFilterChange={handleFilterChange} />
              {!isPending && <ProductList products={productList} />}

              {!isPending && (
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
