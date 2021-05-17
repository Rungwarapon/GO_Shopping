import "../styles/App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

function Comdetail(prop) {
  // const [Idd, SetIdd] = useState(prop.match.params.id)
  // const [CompanyId, SetCompanyId] = useState(prop.id)
  const [ComDee, SetComDee] = useState([]);

  // const fetchDataDetail =()=> {
  Axios.get("http://localhost:3001/api/users/" + prop.id).then((res) => {
    SetComDee(res.data);
  });

  return (
    <div class="detail">
      <div className="companyName">
        <b className="namecom">Company : </b>
        <h3 class="inline">{ComDee.companyName}</h3>
      </div>
      <br />
      <Row>
        <div className="contactdetail" style={{ padding: "3%" }}>
          <Col>
            <b className="pdetailaddress">Phone : </b>
            <p class="inline">{ComDee.phoneNumber}</p>
          </Col>
          <Col>
            <b className="pdetailaddress">Mail : </b>
            <p class="inline">{ComDee.email}</p>
          </Col>
          <Col>
            <b className="pdetailaddress">Address : </b>
            <p class="inline">{ComDee.address}</p>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default Comdetail;
