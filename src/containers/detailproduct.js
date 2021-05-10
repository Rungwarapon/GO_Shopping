import Nav from "../navbar/navbar"
import {Button} from 'react-bootstrap';
import '../styles/App.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react"
import Comdetail from './detailcom'

function Detailproduct(prop) {
    const [Idd, SetIdd] = useState(prop.match.params.id)
    const [ProductDe, SetProductDe] = useState([])
    // const [ComId, SetComId] = useState([])
    // const [ComDe, SetComDe] = useState([])

    const fetchData =()=> {
      Axios.get("http://localhost:3001/api/products/" + Idd).then(
          res => { 
            SetProductDe(res.data)
            // SetComId(res.data.userId)
      })

    }


    useEffect(() => {
      fetchData();

    }, []);


    return (
      <div className="App">
        <Nav/>
        <div className="container">
            <br/><h1 className="nameproduct"><b>{ProductDe.productName}</b></h1><br/>
            <div className="containerProfile">
              <div className="itemProfile1">
                <img style={{ width:'100%', border: '1px solid' }} src={ProductDe.photos}></img><br/>
                <Button variant="primary" href='/'>Back</Button>
                {/* <Comdetail id={ProductDe.userId}/> */}

              </div>
              <div className="itemProfile2">
                  <div className="right">
                    <div style={{ height:"10em" }}>
                      <p className='sizedetail'>{ProductDe.detail}</p>
                    </div>
                    {/* <Comdetail id={ProductDe.userId}/> */}
                    <div>
                      <p className='sizedetail'>ราคา : {ProductDe.priceUnit} บาท</p>
                    </div>
                    {/* <Button variant="primary">preorder</Button> */}
                  </div>
              </div>
            </div>
            {/* <div><Button>asdasdasd</Button></div> */}
            
        </div>
        

      </div>
    );
  }
  
  export default Detailproduct;
  