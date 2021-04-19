import Nav from "../navbar/navbar"
import {Button, Col, Row} from 'react-bootstrap';
import '../styles/App.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";

// const userssFetch = () => {
//   return dispatch => {
//       Axios.get("http://localhost:3001/api/users").then(
//           res => { 
//             SetUser(res.data)
//           })
//   }
// } 
const Profile =()=> {
    const [User, SetUser] = useState()
    const [Firstname, SetFirstname] = useState()
    const [Lastname, SetLastname] = useState()
    const [Email, SetEmail] = useState()
    const fetchData =()=> {
      Axios.get("http://localhost:3001/api/users").then(
          res => { 
            SetUser(res.data[0].User)
            SetFirstname(res.data[0].firstName)
            SetLastname(res.data[0].lastName)
            SetEmail(res.data[0].email)
          })
    }

    useEffect(() => {
      fetchData();
    }, []);
    

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
                        <Col><p> firstname : {Firstname} </p></Col> 
                        <Col><p> lastname : {Lastname}</p></Col>
                    </Row>
                    <p>mail : {Email}</p>
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
                          <th scope="col">State</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>CPU CORE I7-9700F (Original)</td>
                          <td>บริษัท123456 จำกัด</td>
                          <td>5000 ชิ้น</td>
                          <td>60000000 บาท</td>
                          <td>success</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>CPU CORE I7-9700F (Original)</td>
                          <td>บริษัท123456 จำกัด</td>
                          <td>5000 ชิ้น</td>
                          <td>60000000 บาท</td>
                          <td>waiting</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>CPU CORE I7-9700F (Original)</td>
                          <td>บริษัท123456 จำกัด</td>
                          <td>5000 ชิ้น</td>
                          <td>60000000 บาท</td>
                          <td>cancel</td>
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
  
  export default Profile;
  