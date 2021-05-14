import { Card, Button } from "react-bootstrap";
import Nav from "../navbar/navbar"
// import Nav from "../navbar/navberv2"
import '../styles/App.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";
import { Form, FormControl} from 'react-bootstrap';

function Home() {
  const [Product, SetProduct] = useState([]);
  const [ID, SetID] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  const [load, setload] = useState(false)
  const fetchData = () => {
    Axios.get("http://localhost:3001/api/products", setload(true)).then((res) => {
      SetProduct(res.data);
    });
  };

    

    useEffect(() => {
      fetchData();

    }, []);


  const handleChange = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setSearchProduct(fieldVal)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let body = {
      searchProduct: searchProduct
    }
    Axios.post('http://localhost:3001/api/index/search', body).then((response) => {
      setSearchValue(response.data)
      console.log(response.data)
    })
  }
    return (
      <div className="App">
        <Nav/>
        <div className="container">

            
            <Form inline onSubmit={handleSubmit}>
              <FormControl
                type="text"
                name="searchProduct"
                placeholder="Search"
                className="mr-sm-2"
                value={searchProduct}
                onChange={handleChange}
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
        
            <br/><h1 className="text-center font-italic">Product</h1><br/>
            <div className="order">
            {searchValue == '' ? Product.map(item =>
                <div className='sizecard'>
                  <div className="card">
                    <div style={{ width: '100%', height: '300px'}}>
                      <img className="card-img-top" src={item.photos} alt="Card image cap" style={{ width: '100%', height: '100%'}}/>
                    </div>
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
            ): searchValue.map(item => 
            <div className='sizecard'>
              <div className="card">
                  <div style={{ width: '100%', height: '300px'}}>
                    <img className="card-img-top" src={item.photos} alt="Card image cap" style={{ width: '100%', height: '100%'}}/>
                  </div>
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
            </div> )}
            
            </div>
        </div>
      </div>

  );
}

export default Home;
