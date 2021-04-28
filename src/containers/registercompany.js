import { Form, Button, Col, Row} from 'react-bootstrap';
import Nav from "../navbar/navbar"
import Axios from 'axios';
import React, { useState, useEffect } from "react";

function Login() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [companyName, setcompanyName] = useState();
    const [location, setlocation] = useState();
    const [tell, settell] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        let body = {
            password:password,
            companyName: companyName,
            address: location,
            phoneNumber: tell,
            email: email 
        }
        Axios.post('http://localhost:3001/api/users/create', body).then((response) => {
            console.log(response.data)
        })
      }

      const handleChangeemail = (event) => {
        let fieldVal = event.target.value;
        console.log(fieldVal);
        setemail(fieldVal)
      }
      const handleChangepassword = (event) => {
        let fieldVal = event.target.value;
        console.log(fieldVal);
        setpassword(fieldVal)
      }
      const handleChangecompanyName = (event) => {
        let fieldVal = event.target.value;
        console.log(fieldVal);
        setcompanyName(fieldVal)
      }
      const handleChangelocation = (event) => {
        let fieldVal = event.target.value;
        console.log(fieldVal);
        setlocation(fieldVal)
      }
      const handleChangetell = (event) => {
        let fieldVal = event.target.value;
        console.log(fieldVal);
        settell(fieldVal)
      }


      
    return (
      <div className="App">
        <Nav/>
        <div className="container">
          <h1 className="text-center font-italic ">Register</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" value={email} onChange={handleChangeemail}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword"  value={password} onChange={handleChangepassword}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                {/* <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password confirm</Form.Label>
                    <Form.Control type="password" placeholder="Password confirm" />
                </Form.Group> */}

                <Form.Group value={companyName} onChange={handleChangecompanyName}>
                    <Form.Label>company</Form.Label>
                    <Form.Control type="text" placeholder="company name" />
                </Form.Group>
                
                <Form.Group value={tell} onChange={handleChangetell}>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Phone number" />
                </Form.Group>

                <Form.Group value={location} onChange={handleChangelocation}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" />
                </Form.Group>

                <Button variant="primary" href='/login' type="submit" >
                    Submit
                    
                </Button>
            </Form>
        </div>
      </div>
    );
  }
  
  export default Login;
  