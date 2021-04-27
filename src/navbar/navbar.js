import Axios from 'axios';
import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';


function App() {
  const [searchProduct, setSearchProduct] = useState('');

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
      console.log(response.data)
    })
  }

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <div className="container">
          <Navbar.Brand className="text-light" href="/">Go Shopping</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav> */}
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
          </Navbar.Collapse>
          <Nav.Link href="/companymanage">company manage page test and build</Nav.Link>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Login">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar>
    </div >
  );
}

export default App;
