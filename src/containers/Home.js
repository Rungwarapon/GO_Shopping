import { Card, Button } from "react-bootstrap";
import Nav from "../navbar/navbar"
import '../styles/App.css';

function Home() {
    return (
      <div className="App">
        <Nav/>
        <div className="layoutPage">
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/images/test.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
      </div>
      </div>
    );
  }
  
  export default Home;
  