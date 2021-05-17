import Nav from "../navbar/navbar";
import { Button } from "react-bootstrap";
import "../styles/App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Comdetail from "./detailcom";

function Detailproduct(prop) {
  const [Idd, SetIdd] = useState(prop.match.params.id);
  const [ProductDe, SetProductDe] = useState([]);
  const [load, setload] = useState(false);
  // const [ComId, SetComId] = useState([])
  // const [ComDe, SetComDe] = useState([])

  const fetchData = () => {
    Axios.get("http://ec2-3-222-245-240.compute-1.amazonaws.com:3001/api/products/" + Idd).then((res) => {
      SetProductDe(res.data);
      setload(true);
      // SetComId(res.data.userId)
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Nav />

      <div className="container">
        <br />
        <br />
        <h1 className="nameproduct">
          <b>{ProductDe.productName}</b>
        </h1>
        <br />
        <div className="containerProfile">
          <div className="itemProfile1">
            <img
              style={{
                width: "330px",
                height: "330px",
                border: "0px solid",
                margin: "50px",
              }}
              src={ProductDe.photos}
            ></img>
            <br />
            <br />
            <Button variant="primary" href="/">
              Back
            </Button>
            <br />
          </div>
          <div className="itemProfile2">
            <div className="right">
              <div style={{ height: "10em" }}>
                <p id="overflowTest">{ProductDe.detail}</p>
              </div>
              <Comdetail id={ProductDe.userId} />
              <div>
                <h3 className="sizeprice">
                  Price : {ProductDe.priceUnit} Baht{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailproduct;
