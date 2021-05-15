import Nav from "../navbar/navbar"
import {Button} from 'react-bootstrap';
import '../styles/App.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react"
import Comdetail from './detailcom'

function Detailproduct(prop) {
    const [Idd, SetIdd] = useState(prop.match.params.id)
    const [ProductDe, SetProductDe] = useState([])
    const [load, setload] = useState(false)
    // const [ComId, SetComId] = useState([])
    // const [ComDe, SetComDe] = useState([])

    const fetchData =()=> {
      Axios.get("http://localhost:3001/api/products/" + Idd).then(
          res => { 
            SetProductDe(res.data)
            setload(true)
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
                <img style={{ width:'70%', border: '1px solid' }} src={ProductDe.photos}></img><br/>
                <Button variant="primary" href='/'>Back</Button>
                <br/>

              </div>
              <div className="itemProfile2">
                  <div className="right">
                    <div style={{ height:"10em" }}>
                      <p className='sizedetail'>{ProductDe.detail}</p>
                    </div>
                    <Comdetail id={ProductDe.userId}/>
                    <div>
                      <h3 className='sizedetail' >Price : {ProductDe.priceUnit} Baht </h3 >
                    </div>
                  </div>
              </div>
            </div>
            
        </div>
        

      </div>
    );
  }
  
  export default Detailproduct;
  