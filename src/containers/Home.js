import { Card, Button } from "react-bootstrap";
import Nav from "../navbar/navbar";
import "../styles/App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";

function Home() {
  const [Product, SetProduct] = useState([]);
  const [ID, SetID] = useState();
  const fetchData = () => {
    Axios.get("http://localhost:3001/api/products").then((res) => {
      SetProduct(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <h1 className="text-center font-italic">Product</h1>
        <div class="card-columns">
          {Product.map((item) => (
            <div class="card">
              <img
                class="card-img-top"
                src="/images/test.jpeg"
                alt="Card image cap"
                style={{ width: "100%", height: "Auto" }}
              />
              <div class="card-body">
                <h5 class="card-title">{item.productName}</h5>
                {/* <p class="card-text">{item.detail}</p> */}
              </div>
              <div class="card-footer">
                <input
                  min="1"
                  type="number"
                  id="qty"
                  name="qty"
                  // value=
                  // onChange=
                />
                <Button variant="primary" href={"/detailProduct/" + item._id}>
                  Detail
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
