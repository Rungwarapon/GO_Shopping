import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import Nav from "../navbar/navbar"
import jwt_decode from "jwt-decode";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    let body = {
      email: email,
      password: password
    }
    axios.post('http://localhost:3001/api/auths/login', body).then((response) => {
      localStorage.setItem('userToken', response.data.tokens);
      // var token = localStorage.getItem('userToken');
      var secretKey = "secret";
      var jsonPayload = jwt_decode(response.data.tokens, secretKey);
      console.log(jsonPayload)
      // Console.WriteLine(jsonPayload);
      localStorage.setItem('datauser', JSON.stringify(jsonPayload));
      history.push('/')
          }).catch((err) => {
            Swal.fire({
              icon:'error',
              title:'Something Wrong...',
              text: err.message
            })
          })
        }

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <h1 className="text-center font-italic">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" value={email} onChange={(e) => setEmail(e.target.value)}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
                    </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" value={password} onChange={(e) => setPassword(e.target.value)}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
                </Button>
        </Form>
        {/* <Button variant="primary" href="/register">
                   register
            </Button> */}
        <Button variant="primary" href="/register">
          register
            </Button>
      </div>
    </div>
  );
}

export default Login;
