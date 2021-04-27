import { Card, Button } from "react-bootstrap";
<<<<<<< HEAD
import Nav from "../navbar/navbar";
import "../styles/App.css";
import Axios from "axios";
=======
import Nav from "../navbar/navbar"
// import Nav from "../navbar/navberv2"
import '../styles/App.css';
import Axios from 'axios';
>>>>>>> 8eabe23e092533cf0d66741add9d5ca4446cd763
import React, { useState, useEffect } from "react";

function Home() {
  const [Product, SetProduct] = useState([]);
  const [ID, SetID] = useState();
  const fetchData = () => {
    Axios.get("http://localhost:3001/api/products").then((res) => {
      SetProduct(res.data);
    });
  };

<<<<<<< HEAD
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
=======
          })
    }
    

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div className="App">
        <Nav/>
        <div className="container">
            <br/><h1 className="text-center font-italic">Product</h1><br/>
            <div className="order">
              
            { Product.map(item =>
                <div className='sizecard'>
                  <div className="card">
                    <img className="card-img-top" src={item.photos} alt="Card image cap" style={{ width: '100%', height: 'Auto'}}/>
                    <div className="card-body">
                      <h5 className="nameproductinhome">{item.productName}</h5>
                    </div>
                    <div className="card-footer col">
                      <div className='pricebutton'>
                        <Button className="hoverbutton" href={"/detailProduct/"+ item._id}>Detail</Button>
                        <p className='spaceprice'><b>price {item.priceUnit}.-</b></p>
                      </div>
                    </div>
                  </div>
                </div>
            )}
            
            </div>
>>>>>>> 8eabe23e092533cf0d66741add9d5ca4446cd763
        </div>
      </div>
    </div>
  );
}

export default Home;
