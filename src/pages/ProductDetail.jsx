import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/ChaJiTae/shoppingmall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  });

  return (
    <div className="productDetailContainer">
      <div className="productDetailImageDiv">
        <img src={product?.img} alt="Product" className="productDetailImage" />
      </div>
      <div className="productDetailInfo">
        <h2 className="productDetailTitle">{product?.title}</h2>
        <h3 className="productDetailPrice">
          {`${product?.price.toLocaleString("ko-KR")}원`}
        </h3>
        <div className="productDetailSizes">
          Size:{" "}
          {product?.size.map((size) => {
            if (size !== "L") return size + " / ";
            else return size;
          })}
        </div>
        <button className="productDetailButton">장바구니 추가하기</button>
      </div>
    </div>
  );
}
