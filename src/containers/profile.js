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
    const [id, SetId] = useState()
    const [companyName, SetcompanyName] = useState()
    const [phoneNumber, SetphoneNumber] = useState()
    const [Email, SetEmail] = useState()
    const [photos, Setphotos] = useState()
    const [type, Settype] = useState()

    const data = JSON.parse(localStorage.getItem('datauser'))
    console.log(data)
    const fetchData =()=> {
      Axios.get("http://localhost:3001/api/users").then(
          res => { 
            SetId(data._id)
            SetcompanyName(data.companyName)
            SetphoneNumber(data.phoneNumber)
            SetEmail(data.email)
            Setphotos(data.photos)
            Settype(data.type)
          })
    }

    useEffect(() => {
      fetchData();
    }, []);
    

    return (
      <div className="App">
        <Nav/>
        <div className="container">
            <br/><h1 className="text-center font-italic">Profile page</h1><br/>
            <div className="containerProfile">
              <div className="itemProfile1">
                <img src="/images/test.jpeg"></img>
                {/* <Button variant="outline-success">Edit Profile</Button>
                <Button variant="outline-success">Change Password</Button> */}
              </div>
              <div className="itemProfile2">
                <div className="right">
                  <div style={{ height:"10em" }}>
                    <Row>
                        <Col><p><b>Id :</b> {id} </p></Col> 
                        <Col><p><b>companyName :</b> {companyName}</p></Col>
                    </Row>
                    <p><b>Email :</b> {Email}</p>
                    <p><b>Phone number :</b>{phoneNumber}</p>
                  </div>
                  <div>
                    <h3>Order history</h3>
                    <table className="table">
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
  