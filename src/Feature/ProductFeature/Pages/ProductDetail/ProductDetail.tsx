import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { productApi } from "../../../../apis/ProductApi";

export interface ProductDetailProps {}

export function ProductDetail({}: ProductDetailProps) {
  const { productId } = useParams();

  const { data: dataProduct } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productApi.getProductById(productId as string),
  });

  return (
    <div>
      <div className="container mx-auto"></div>
    </div>
  );
}
