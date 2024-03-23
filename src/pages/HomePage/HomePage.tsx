import { useQuery } from "@tanstack/react-query";

import { Product } from "../../types";
import { productApi } from "../../apis";
import { bannerApi } from "../../apis/bannerApi";
import { ProductSection, Slide } from "./components";

function filterProducts(
  products: Product[],
  typeFilter: string,
  nameFilter: string,
): Product[] {
  return typeFilter === "category"
    ? products.filter((product) => product.category.categoryName === nameFilter)
    : products.filter(
        (product) => product.productType.productTypeName === nameFilter,
      );
}

export function HomePage() {
  const { data: banners, isPending: isBannersPending } = useQuery({
    queryKey: ["banners"],
    queryFn: () => bannerApi.getAll(),
  });

  const { data: products, isPending: isProductsPending } = useQuery({
    queryKey: ["listProduct"],
    queryFn: () => productApi.getProducts(),
  });

  let listProductHasTypeOxford: Product[] = [];
  let listProductHasTypeLoafer: Product[] = [];
  let listProductHasTypeLBoots: Product[] = [];
  let listProductHasTypeDerby: Product[] = [];
  let listProductHasAccesorries: Product[] = [];

  if (!isProductsPending) {
    const { data }: any = products;
    listProductHasTypeOxford = filterProducts(data, "productType", "oxford");
    listProductHasTypeLoafer = filterProducts(data, "productType", "loafer");
    listProductHasTypeLBoots = filterProducts(data, "productType", "boots");
    listProductHasTypeDerby = filterProducts(data, "productType", "derby");
    listProductHasAccesorries = filterProducts(data, "category", "accessories");
  }

  return (
    <main>
      {!isBannersPending && <Slide data={banners} />}
      {!isProductsPending && (
        <ProductSection title="oxford" data={listProductHasTypeOxford} />
      )}
      {!isProductsPending && (
        <ProductSection title="loafer" data={listProductHasTypeLoafer} />
      )}
      {!isProductsPending && (
        <ProductSection title="boots" data={listProductHasTypeLBoots} />
      )}
      {!isProductsPending && (
        <ProductSection title="derby" data={listProductHasTypeDerby} />
      )}
    </main>
  );
}
