import { Card, Button } from "react-bootstrap";
import Nav from "../navbar/navbar"
// import Nav from "../navbar/navberv2"
import '../styles/App.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";

function Home() {
    const [Product, SetProduct] = useState([])
    const [ID, SetID] = useState()
    const fetchData =()=> {
      Axios.get("http://localhost:3001/api/products").then(
          res => { 
            SetProduct(res.data)

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
                  <div class="card">
                    <img class="card-img-top" src={item.photos} alt="Card image cap" style={{ width: '100%', height: 'Auto'}}/>
                    <div class="card-body">
                      <h5 class="nameproductinhome">{item.productName}</h5>
                    </div>
                    <div class="card-footer col">
                      <div className='pricebutton'>
                        <Button className="hoverbutton" href={"/detailProduct/"+ item._id}>Detail</Button>
                        <p className='spaceprice'><b>price {item.priceUnit}.-</b></p>
                      </div>
                    </div>
                  </div>
                </div>
            )}
            
            </div>
        </div>
      </div>
    
      
    );
  }
  
  export default Home;
  