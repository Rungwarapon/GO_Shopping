// import { Card, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Nav from "../navbar/navbar";
import styles from "./CartItem.module.css";
import "../styles/App.css";
import {Card,Button,ButtonToolbar,Row,Navbar,Col,Modal,Container,} from "react-bootstrap";
import Axios from 'axios';




function MydModalWithGrid(props) {
  const [productName, setproductName] = useState();
  const [priceUnit, setpriceUnit] = useState();
  const [photos, setphotos] = useState();
  const [detail, setdetail] = useState();
  const [userId, setuserId] = useState();
  


  const handleSubmit = (event) => {
    event.preventDefault();
    let body = {
      productName: productName,
      priceUnit: priceUnit,
      photos:photos,
      detail:detail,
      userId:userId
    }
    Axios.post('http://localhost:3001/api/products/create', body).then((response) => {
      // setSearchValue(response.data)
      setproductName('')
      setpriceUnit('')
      setphotos('')
      setdetail('')
      window.location.reload(true);
    })
    
    // props.onHide()
    // setTimeout(3000)
    // window.location.reload(true);
    
  }

  const handleChangeproductName = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setproductName(fieldVal)
  }
  const handleChangepriceUnit = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setpriceUnit(fieldVal)
  }
  const handleChangedetail = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setdetail(fieldVal)
  }
  const handleChangephotos = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setphotos(fieldVal)
  }



  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Product
        </Modal.Title>
      </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <label value={productName} onChange={handleChangeproductName}>
                  Product Name :<input type="text" name="Product Name"></input>
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={7}>
                <label value={priceUnit}onChange={handleChangepriceUnit}>
                  Price Unit : 
                  <input type="number" name="Product Unit"></input>
                </label>
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
                <label type="text" value={detail} onChange={handleChangedetail}>
                  Description : 
                <textarea name='Description' />
                </label>
              </Col>
              </Row>
              <Row>
              <Col xs={6} md={4}>
                <label value={photos} onChange={handleChangephotos}>
                  Choose Image : 
                  <input type="file"></input>
                </label>
              </Col>
              <Col xs={6} md={4}>
              </Col>
            </Row>
          </Container>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" type="submit">Add</Button>
          </Modal.Footer>
        </form>
    </Modal>
  );
}

function Companymanage() {
  const [modalShow, setModalShow] = useState(false);
  const [Product, SetProduct] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/api/products").then((res) => {
      SetProduct(res.data);
    });
  };

    

    useEffect(() => {
      fetchData();
      

    }, []);

  const handleDElete = (item) =>{
    Axios.delete("http://localhost:3001/api/products/delete/" + item._id).then((res) => {});
    window.location.reload(true);
  }

  return (
    <div className="App">
      <Nav />
        <div className="container">
          <br/>
          <div style={{ display: 'flex'}}>
            <div style={{ width: '85%'}}><h1>Manage Product</h1></div>
            <div><Button variant="primary" onClick={() => setModalShow(true)}>
              Add Product
            </Button></div>
          </div>
          

          <MydModalWithGrid
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        

        <div className="order">
          

            {Product.map(item => 
            <div className='sizecard'>
              <Card className='card'>
                <Card.Img
                  variant="top"
                  src={item.photos} style={{ width: '100%', height: 'Auto'}}
                />
                <Card.Body style={{ height: '300px'}}>
                  <Card.Title style={{ height: '6vh'}}>{item.productName}</Card.Title>
                  <Card.Text>
                  {item.detail}
                  </Card.Text>
                  <div className={styles.cartItem__actions}>
                    <div className={styles.cartItem__qty}>
                      <label htmlFor="qty">{item.priceUnit}</label>
                    </div>
                    <button className={styles.actions__deleteItemBtn} onClick={() => handleDElete(item)}>
                      <img src="https://image.flaticon.com/icons/svg/709/709519.svg" alt=""/>
                    </button>
                    
                  </div>
                </Card.Body>
              </Card>
            </div>
            )}
          
        </div>
        </div>
    </div>
  );
}

// ReactImageUploadComponent.propTypes = {
//   buttonType: "button"
// };

// ReactImageUploadComponent.propTypes = {
//   buttonType: PropTypes.string
// };

export default Companymanage;
