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
                <img src={photos}></img>
                {/* <Button variant="outline-success">Edit Profile</Button>
                <Button variant="outline-success">Change Password</Button> */}
              </div>
              <div className="itemProfile2">
                <div className="right"><br/><br/>
                  <div style={{ height:"10em" }}>
                    <Row>
                        <Col><p><h4>Id : </h4> {id} </p></Col>
                        <Col><p><h4>companyName : </h4> {companyName}</p></Col>
                    </Row>
                    <p><h5>Email : </h5> {Email}</p>
                    <p><h5>Phone number : </h5>{phoneNumber}</p>
                    <p><h5>Status : </h5>{type}</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Profile;
  