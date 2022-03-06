import React from "react";
import { useRouter } from "next/router";
import PrimaryLayout from "../components/layout/PrimaryLayout";
import ProductDetail from "../components/ProductDetail";

function ProductDetailPage() {
  const router = useRouter();
  const productId = router.query.page_id;

  return (
    <div>
      <ProductDetail id={productId} />
    </div>
  );
}

ProductDetailPage.Layout = PrimaryLayout;
export default ProductDetailPage;
