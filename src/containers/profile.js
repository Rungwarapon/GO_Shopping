import Nav from "../navbar/navbar";
import { Button, Col, Row } from "react-bootstrap";
import "../styles/App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";

// const userssFetch = () => {
//   return dispatch => {
//       Axios.get("http://localhost:3001/api/users").then(
//           res => {
//             SetUser(res.data)
//           })
//   }
// }
const Profile = () => {
  const [id, SetId] = useState();
  const [companyName, SetcompanyName] = useState();
  const [phoneNumber, SetphoneNumber] = useState();
  const [Email, SetEmail] = useState();
  const [photos, Setphotos] = useState();
  const [type, Settype] = useState();

  const data = JSON.parse(localStorage.getItem("datauser"));
  console.log(data);
  const fetchData = () => {
    Axios.get("http://ec2-3-238-162-98.compute-1.amazonaws.com:3001/api/users").then((res) => {
      SetId(data._id);
      SetcompanyName(data.companyName);
      SetphoneNumber(data.phoneNumber);
      SetEmail(data.email);
      Setphotos(data.photos);
      Settype(data.type);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <br />
        <br />
        <br />
        <h1 className="text-center font-italic">Profile</h1>
        <br />
        <div className="containerProfile">
          <div className="itemProfile1">
            <img src={photos}></img>
            {/* <Button variant="outline-success">Edit Profile</Button>
                <Button variant="outline-success">Change Password</Button> */}
          </div>
          <div className="itemProfile2">
            <div className="right">
              <br />
              <Row>
                <div style={{ height: "10em" }}>
                  <Col>
                    <b className="aboutprofile">Id : </b>
                    <p class="inline-profile"> {id} </p>
                  </Col>
                  <Col>
                    <b className="aboutprofile">companyName : </b>
                    <p class="inline-profile"> {companyName}</p>
                  </Col>

                  <Col>
                    <b className="aboutprofile">Email : </b> <p class="inline-profile">{Email}</p>
                  </Col>
                  <Col>
                    <b className="aboutprofile">Phone number : </b>
                    <p class="inline-profile">{phoneNumber}</p>
                  </Col>
                  <Col>
                    <b className="aboutprofile">Status : </b>
                    <p class="inline-profile">{type}</p>
                  </Col>
                </div>
              </Row>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
