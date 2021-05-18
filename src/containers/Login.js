import axios from 'axios';
import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
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
    axios.post('http://ec2-44-192-108-246.compute-1.amazonaws.com:3001/api/auths/login', body).then((response) => {
      localStorage.setItem('userToken', response.data.tokens);
      localStorage.setItem('userId', response.data.userId);
      // localStorage.setItem('isAdmin', response.data.isAdmin);
      // var token = localStorage.getItem('userToken');
      var secretKey = "secret";
      var jsonPayload = jwt_decode(response.data.tokens, secretKey);
      console.log(response.data.isAdmin)
      
      localStorage.setItem('datauser', JSON.stringify(jsonPayload));
      if (response.data.isAdmin){
        history.push('/adminmanage')
        
      }else{
        history.push('/')
      }
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
        <br/><br/><br/>
        <h1 className="text-center font-italic">Login</h1>
        <br/>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" value={email} onChange={(e) => setEmail(e.target.value)}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
                    </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" value={password} onChange={(e) => setPassword(e.target.value)}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          {' '}
          <Button variant="secondary" href="/register">
            register
          </Button>
        </Form>
        </Col>
        </Row>
        {/* <Button variant="primary" href="/register">
                   register
            </Button> */}
      </div>
    </div>
  );
}

export default Login;
