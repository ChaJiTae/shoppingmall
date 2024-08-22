import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function ProductAll() {
  const [productList, setProductList] = useState([]);
  // eslint-disable-next-line
  const [query, setQuery] = useSearchParams();

  // const getProducts = async () => {
  //   let searchQuery = query.get("q") || "";
  //   let url = `http://localhost:4000/products?q=${searchQuery}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setProductList(data);
  // };

  const getProducts = async () => {
    try {
      const searchQuery = query.get("q") || "";
      const PORT_NUM = "4000";
      const url = new URL(
        `https://my-json-server.typicode.com/ChaJiTae/shoppingmall/products?q=${searchQuery}`
      );
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      const filteredData = searchQuery
        ? data.filter((item) => item.title.includes(searchQuery))
        : data;
      if (filteredData.length === 0) {
        alert("검색결과가 없습니다.\n메인페이지로 돌아갑니다.");
        return;
      }
      setProductList(filteredData);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList?.map((menu, index) => (
            <Col lg={3} key={index}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
