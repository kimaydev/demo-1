import React from "react";
import { useParams } from "react-router";

const ProductList = () => {
  const { ilist } = useParams();
  console.log(ilist);
  return <div>테스트</div>;
};

export default ProductList;
