import { Form, Button, Col, Row } from "react-bootstrap";
import Nav from "../navbar/navbar";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Loader from "react-loader-spinner";

function Register() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [companyName, setcompanyName] = useState();
  const [location, setlocation] = useState();
  const [tell, settell] = useState();
  const [file, setfile] = useState();
  const history = useHistory();
  const [load, setload] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("companyName", companyName);
    formData.append("address", location);
    formData.append("phoneNumber", tell);
    formData.append("type", "pending");
    formData.append("photos", file);

    Axios.post(
      "http://ec2-44-192-108-246.compute-1.amazonaws.com:3001/api/users/create",
      formData,
      setload(true)
    ).then((response) => {
      history.push("/login");
    });
  };

  const handleChangeemail = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setemail(fieldVal);
  };
  const handleChangepassword = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setpassword(fieldVal);
  };
  const handleChangecompanyName = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setcompanyName(fieldVal);
  };
  const handleChangelocation = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    setlocation(fieldVal);
  };
  const handleChangetell = (event) => {
    let fieldVal = event.target.value;
    console.log(fieldVal);
    settell(fieldVal);
  };
  const handleChangefile = (event) => {
    let fieldVal = event.target.files[0];
    console.log(fieldVal);
    setfile(fieldVal);
  };

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <br/><br/>
        <h1 className="text-center font-italic ">Register</h1>
        <br />

        {load ? (
          <center>
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          </center>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group
                  controlId="formBasicEmail"
                  value={email}
                  onChange={handleChangeemail}
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  value={password}
                  onChange={handleChangepassword}
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                {/* <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password confirm</Form.Label>
                    <Form.Control type="password" placeholder="Password confirm" />
                </Form.Group> */}

                <Form.Group
                  value={companyName}
                  onChange={handleChangecompanyName}
                >
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" placeholder="Company name" />
                </Form.Group>

                <Form.Group value={tell} onChange={handleChangetell}>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="text" placeholder="Phone number" />
                </Form.Group>

                <Form.Group value={location} onChange={handleChangelocation}>
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="Location" />
                </Form.Group>
                <Form.Group value={file} onChange={handleChangefile}>
                  <Form.Label>File</Form.Label>
                  <Form.Control type="file" placeholder="file" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                </Col>
            </Row>
          </Form>
        )}
        <br/>
      </div>
    </div>
  );
}

export default Register;
