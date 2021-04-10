import { Form, Button} from 'react-bootstrap';
import Nav from "../navbar/navbar"
function Login() {
    return (
      <div className="App">
        <Nav/>
        <div className="container">
          <h1 className="text-center font-italic">Login</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
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
            <Button variant="primary" href="/register">
                   register
            </Button>
            <Button variant="primary" href="/registercompany">
                   register company
            </Button>
        </div>
      </div>
    );
  }
  
  export default Login;
  