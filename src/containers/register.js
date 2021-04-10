import { Form, Button, Col, Row} from 'react-bootstrap';
import Nav from "../navbar/navbar"
function Login() {
    return (
      <div className="App">
        <Nav/>
        <div className="container">
          <p className="text-center font-italic ">Register</p>
            <Form>
                <Row>
                    <Col>
                    <Form.Label>First name</Form.Label>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Row>

                <Form.Group>
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password confirm</Form.Label>
                    <Form.Control type="password" placeholder="Password confirm" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
      </div>
    );
  }
  
  export default Login;
  