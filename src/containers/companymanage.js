// import { Card, Button } from "react-bootstrap";
import React, { useState } from "react";
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
} from "react-bootstrap";



function MydModalWithGrid(props) {
  // const [picture, setPicture] = ([]);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <form>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <label>
                  Product Name :<input type="text" name="Product Name"></input>
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={7}>
                <label>
                  Price Unit : 
                  <input type="text" name="Product Unit"></input>
                </label>
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
                <label>
                  Description : 
                <textarea name='Description' />
                </label>
              </Col>
              </Row>
              <Row>
              <Col xs={6} md={4}>
                <label>
                  Choose Image : 
                  {/* <input type="file" onClick={() => setPicture()}></input> */}
                  <input type="file"></input>
                </label>
                {/* .col-xs-6 .col-md-4 */}
              </Col>
              <Col xs={6} md={4}>
                {/* .col-xs-6 .col-md-4 */}
              </Col>
            </Row>
          </Container>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Companymanage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="Companymanage">
      <Nav />
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Add Product
          </Button>

          <MydModalWithGrid
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </Navbar>
      <Row>
        <div className="layoutPage">
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://storage.googleapis.com/file-computeandmore/images/051e9571-9e1f-45db-87d0-014a6d966b7c.jpg?fbclid=IwAR2tEfzpYhxJsLC2TxiXomNEjLIPR7awUYr2FOGOpXfY7R_OiOrI9glqb4w"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className={styles.cartItem__actions}>
                  <div className={styles.cartItem__qty}>
                    <label htmlFor="qty">Qty</label>
                    <input
                      min="1"
                      type="number"
                      id="qty"
                      name="qty"
                      // value={input}
                      // onChange={onChangeHandler}
                    />
                  </div>
                  <button
                    // onClick={() => removeFromCart(item.id)}
                    className={styles.actions__deleteItemBtn}
                  >
                    <img
                      src="https://image.flaticon.com/icons/svg/709/709519.svg"
                      alt=""
                    />
                  </button>
                </div>
              </Card.Body>
            </Card>

            <p>เพิ่มproduct ได้</p>
            <p>
              แก้ไขแต่ละproductได้/ลบ ประมาณhistoryในprofileก็ได้ หรือ
              ออกแบบใหม่เลย
            </p>
          </div>
        </div>
      </Row>
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
