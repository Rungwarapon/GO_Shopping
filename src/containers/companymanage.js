// import { Card, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Nav from "../navbar/navbar";
import styles from "./CartItem.module.css";
import "../styles/App.css";
import {
  Card,
  Button,
  ButtonToolbar,
  Row,
  Navbar,
  Col,
  Modal,
  Container,
  Form,
} from "react-bootstrap";
import Axios from "axios";
import Loader from "react-loader-spinner";

function MydModalWithGrid(props) {
  const [productName, setproductName] = useState();
  const [priceUnit, setpriceUnit] = useState();
  const [photos, setphotos] = useState();
  const [detail, setdetail] = useState();
  const [userId, setuserId] = useState();
  const data = localStorage.getItem("userId");
  const [load, setload] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("productName", productName);
    formData.append("priceUnit", priceUnit);
    formData.append("detail", detail);
    formData.append("userId", data);
    formData.append("photos", photos);

    Axios.post(
      "http://ec2-3-93-33-134.compute-1.amazonaws.com:3001/api/products/create",
      formData,
      setload(true)
    ).then((response) => {
      // setSearchValue(response.data)
      setproductName("");
      setpriceUnit("");
      setphotos("");
      setdetail("");
      setTimeout(3000);
      window.location.reload(true);
    });

    // props.onHide()

    // window.location.reload(true);
  };

  const handleChangeproductName = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setproductName(fieldVal);
  };
  const handleChangepriceUnit = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setpriceUnit(fieldVal);
  };
  const handleChangedetail = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setdetail(fieldVal);
  };
  const handleChangephotos = (event) => {
    let fieldVal = event.target.files[0];
    console.log(event.target.files[0]);
    setphotos(fieldVal);
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Product
        </Modal.Title>
      </Modal.Header>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <Modal.Body className="show-grid">
          <Container>
            <div class="form-group">
              <label>Product Name :</label>
              <br />
              <input
                class="form-control"
                type="text"
                name="Product Name"
                value={productName}
                onChange={handleChangeproductName}
              ></input>
            </div>
            <div class="form-group">
              <label>Price Unit :</label>
              <input
                class="form-control"
                type="number"
                name="Product Unit"
                value={priceUnit}
                onChange={handleChangepriceUnit}
              ></input>
            </div>
            <div class="form-group">
              <label>Description :</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                name="Description"
                type="text"
                value={detail}
                onChange={handleChangedetail}
              />
            </div>
            <div class="form-group">
              <label>Choose Image :</label>
              <br />
              <input
                type="file"
                value={photos}
                onChange={handleChangephotos}
              ></input>
            </div>
          </Container>
        </Modal.Body>
        {load ? (
          <center>
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </center>
        ) : (
          ""
        )}

        <Modal.Footer>
          <Button variant="outline-success" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

function MyEditGrid(props) {
  const [productid, setproductid] = useState(props._id);
  const [productName, setproductName] = useState(props.productName);
  const [priceUnit, setpriceUnit] = useState(props.priceUnit);
  const [photos, setphotos] = useState(props.photos);
  const [detail, setdetail] = useState(props.detail);
  const [userId, setuserId] = useState(props.userId);
  const data = localStorage.getItem("userId");

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("productName", productName);
    formData.append("priceUnit", priceUnit);
    formData.append("detail", detail);
    formData.append("userId", data);
    formData.append("photos", photos);

    Axios.post(
      "http://ec2-3-93-33-134.compute-1.amazonaws.com:3001/api/products/edit/" + productid,
      formData
    ).then((response) => {
      // setSearchValue(response.data)
      setproductid("");
      setproductName("");
      setpriceUnit("");
      setphotos("");
      setdetail("");
      window.location.reload(true);
    });

    // props.onHide()
    // setTimeout(3000)
    // window.location.reload(true);
  };

  const handleChangeproductName = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setproductName(fieldVal);
  };
  const handleChangepriceUnit = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setpriceUnit(fieldVal);
  };
  const handleChangedetail = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setdetail(fieldVal);
  };
  const handleChangephotos = (event) => {
    let fieldVal = event.target.files[0];
    console.log(fieldVal);
    setphotos(fieldVal);
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
      </Modal.Header>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <Modal.Body className="show-grid">
          <Container>
            <div class="form-group">
              <label>Product Name :</label>
              <br />
              <input
                class="form-control"
                type="text"
                name="Product Name"
                value={productName}
                onChange={handleChangeproductName}
              ></input>
            </div>
            <div class="form-group">
              <label>Price Unit :</label>
              <input
                class="form-control"
                type="number"
                name="Product Unit"
                value={priceUnit}
                onChange={handleChangepriceUnit}
              ></input>
            </div>

            <div class="form-group">
              <label>Description :</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                name="Description"
                type="text"
                value={detail}
                onChange={handleChangedetail}
              />
            </div>
            <div class="form-group">
              <label>Choose Image :</label>
              <br />
              <input
                type="file"
                value={photos}
                onChange={handleChangephotos}
              ></input>
            </div>
            {/* <Row>
              <Col xs={6} md={4}>
                <img
                  src="https://www.nobossgroup.com/wp-content/themes/eikra/assets/img/noimage-420x273.jpg"
                  class="img-rounded"
                  alt="Cinque Terre"
                  width="300"
                  height="200"
                ></img>
              </Col>
            </Row> */}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-success"
            type="submit"
            onClick={() => setdetail(false)}
          >
            Save Change
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

function Companymanage() {
  const [modalShow, setModalShow] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [Product, SetProduct] = useState([]);
  const data = localStorage.getItem("userId");
  const MAX_POSSIBLE_HEIGHT = 500;

  const fetchData = () => {
    Axios.get("http://ec2-3-93-33-134.compute-1.amazonaws.com:3001/api/products/user/" + data).then((res) => {
      SetProduct(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDElete = (item) => {
    Axios.delete("http://ec2-3-93-33-134.compute-1.amazonaws.com:3001/api/products/delete/" + item._id).then(
      (res) => {}
    );
    window.location.reload(true);
  };

  return (
    <div className="App">
      <Nav />
      <br />
      <div className="container">
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ width: "85%" }}>
            <h1>Manage Product</h1>
          </div>
          <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Add Product
            </Button>
          </div>
        </div>

        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        <br />
        <div className="order">
          {Product.map((item) => (
            <div className="sizecard">
              <Card className="card" style={{ width: "19rem" }}>
                <div
                  style={{
                    height: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.photos}
                    style={{ width: "300px", height: "Auto" }}
                  />
                </div>
                <Card.Body style={{ height: "300px" }}>
                  <Card.Title style={{ height: "6vh" }}>
                    {item.productName}
                  </Card.Title>
                  <div class="showdetailincard line-clamp">{item.detail}</div>
                  <div className={styles.cartItem__actions}>
                    <div className={styles.cartItem__qty}>
                      <label htmlFor="qty">{item.priceUnit}</label>
                    </div>
                    <br />
                    <Row>
                      <Button
                        variant="outline-info"
                        type="submit"
                        onClick={() => setShowDetail(true)}
                        style={{ marginRight: "20px" }}
                      >
                        Edit
                      </Button>
                      <button
                        className={styles.actions__deleteItemBtn}
                        onClick={() => handleDElete(item)}
                      >
                        <img
                          src="https://image.flaticon.com/icons/svg/709/709519.svg"
                          alt=""
                        />
                      </button>
                    </Row>
                  </div>

                  <MyEditGrid
                    id={Axios.get(
                      "http://ec2-3-93-33-134.compute-1.amazonaws.com:3001/api/products/" + item._id
                    )}
                    show={showDetail}
                    onHide={() => setShowDetail(false)}
                  />
                </Card.Body>
              </Card>
            </div>
          ))}
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
