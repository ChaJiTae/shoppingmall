import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div>
      <div className="productImageSet" onClick={showDetail}>
        {item?.new === true && <div className="productNew">⭐️New</div>}
        <img alt={item?.img} className="productImage" src={item?.img} />
      </div>
      <div className="productChoice">
        {item?.choice === true ? "Consious Choice" : ""}
      </div>
      <div className="productTitle">{item?.title}</div>
      <div className="productPrice">₩{item?.price}</div>
    </div>
  );
}
