import React from "react";

export default function ProductCard({ item }) {
  return (
    <div>
      <div className="productImageSet">
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
