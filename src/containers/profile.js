import Nav from "../navbar/navbar"
import {Button} from 'react-bootstrap';
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
                <p>name :firstname lastname</p>
                <p>mail :123456@hotmail.com</p>
                <p>Phone number : 0860606060</p>
              </div>
            </div>
        </div>
        

      </div>
    );
  }
  
  export default profile;
  