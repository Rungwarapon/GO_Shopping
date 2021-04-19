import Nav from "../navbar/navbar"
import {Button} from 'react-bootstrap';
import '../styles/App.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";

function Detailproduct(prop) {
    const [Idd, SetIdd] = useState(prop.match.params.id)
    const [ProductDe, SetProductDe] = useState([])

    const fetchData =()=> {
      Axios.get("http://localhost:3001/api/products/" + Idd).then(
          res => { 
            SetProductDe(res.data)

          })
    }

    useEffect(() => {
      fetchData();
    }, []);


    return (
      <div className="App">
        <Nav/>
        <div className="container">
            <h1 className="text-center font-italic">{ProductDe.productName}</h1>
            <div className="containerProfile">
              <div className="itemProfile1">
                <img style={{ width:'100%' }} src="/images/test.jpeg"></img>
                <div>
                  <h2>บริษัท123456 จำกัด</h2>
                </div>
                <div className="contactdetail">
                  <div style={{ padding:'10%' }}>
                    <p>Phone : 0800808080</p>
                    <p>Mail : 610700000@kmitl.ac.th</p>
                    <p>Line : intal thailand</p>
                    <p>Address: 1/10 ซอย หลวงแพ่ง999 เขต ลาดกระบัง 10520 กรุงเทพ </p>
                  </div>
                </div>
              </div>
              <div className="itemProfile2">
                  <div className="right">
                    <div style={{ height:"20em" }}>
                      <p>{ProductDe.detail}</p>
                    </div>
                    <div>
                      <p>จำนวน : 10000 ชิ้น</p>
                      <p>ราคา : {ProductDe.priceUnit} บาท</p>
                    </div>
                    <Button variant="primary">
                      preorder
                    </Button>
                  </div>
              </div>
            </div>
        </div>
        

      </div>
    );
  }
  
  export default Detailproduct;
  