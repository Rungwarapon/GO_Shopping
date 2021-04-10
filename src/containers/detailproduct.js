import Nav from "../navbar/navbar"
import {Button} from 'react-bootstrap';
import '../styles/App.css';
function detailproduct() {
    return (
      <div className="App">
        <Nav/>
        <div className="container">
            <h1 className="text-center font-italic">Product name</h1>
            <div className="containerProfile">
              <div className="itemProfile1">
                <img src="/images/test.jpeg"></img>
                <div>
                  <p>name factory</p>
                </div>
                <div>
                  <p>Phone</p>
                  <p>Mail</p>
                  <p>Line</p>
                  <p>Address</p>
                </div>
              </div>
              <div className="itemProfile2">
                <div>
                  <p>detail</p>
                  <p>ราคาจำนวน</p>
                  <p>Phone number : 0860606060</p>
                </div>
                <Button variant="primary">
                   preorder
                </Button>
              </div>
            </div>
        </div>
        

      </div>
    );
  }
  
  export default detailproduct;
  