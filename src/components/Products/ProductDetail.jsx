import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductDetail = () => {
  const { getProductDetails, productDetails } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);
  return (
    <div>
      {productDetails.name} {productDetails.price}
    </div>
  );
};

export default ProductDetail;
