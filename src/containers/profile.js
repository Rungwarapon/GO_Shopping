import Nav from "../navbar/navbar"
import {Button, Col, Row} from 'react-bootstrap';
import '../styles/App.css';
function profile() {
    return (
      <div className="App">
        <Nav/>
        <div className="container">
            <h1 className="text-center font-italic">Profile page</h1>
            <div className="containerProfile">
              <div className="itemProfile1">
                <img src="/images/test.jpeg"></img>
                <Button variant="outline-success">Edit Profile</Button>
                <Button variant="outline-success">Change Password</Button>
              </div>
              <div className="itemProfile2">
                <div className="right">
                  <div style={{ height:"10em" }}>
                    <Row>
                        <Col><p> firstname : thitiwut</p></Col>
                        <Col><p> lastname : phohpan</p></Col>
                    </Row>
                    <p>mail :123456@hotmail.com</p>
                    <p>Phone number : 0860606060</p>
                  </div>
                  <div>
                    <h3>Order history</h3>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Product</th>
                          <th scope="col">Company</th>
                          <th scope="col">Number</th>
                          <th scope="col">Total price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>CPU CORE I7-9700F (Original)</td>
                          <td>บริษัท123456 จำกัด</td>
                          <td>5000 ชิ้น</td>
                          <td>60000000 บาท</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>CPU CORE I7-9700F (Original)</td>
                          <td>บริษัท123456 จำกัด</td>
                          <td>5000 ชิ้น</td>
                          <td>60000000 บาท</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>CPU CORE I7-9700F (Original)</td>
                          <td>บริษัท123456 จำกัด</td>
                          <td>5000 ชิ้น</td>
                          <td>60000000 บาท</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
        

      </div>
    );
  }
  
  export default profile;
  