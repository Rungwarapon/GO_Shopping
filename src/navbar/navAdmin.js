import Axios from "axios";
import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Row,
  Col
} from "react-bootstrap";
import { useHistory } from "react-router";
import companyLogo from "./images/GoShopping1.png";

function App() {
  const history = useHistory();
  const [searchProduct, setSearchProduct] = useState("");

  const handleChange = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setSearchProduct(fieldVal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let body = {
      searchProduct: searchProduct,
    };
    Axios.post("http://localhost:3001/api/index/search", body).then(
      (response) => {
        console.log(response.data);
      }
    );
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("datauser");
    history.push("/login");
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <div className="container">
          <Navbar.Brand className="text-light" href="/adminmanage">
            <img
              src={companyLogo}
              width="60%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Row>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse> */}
            <Nav.Link href="/adminuser">All Company</Nav.Link>
            {localStorage.getItem("userToken") ? (
              <Nav.Link onClick={logout}>logout</Nav.Link>
            ) : (
              <Nav.Link href="/login"><Row>
              <Col md="auto"><Nav id="nav">Login</Nav></Col></Row></Nav.Link>
            )}
          </Row>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
