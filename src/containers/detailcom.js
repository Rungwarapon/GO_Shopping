import '../styles/App.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";

function Comdetail(prop) {
    // const [Idd, SetIdd] = useState(prop.match.params.id)
    // const [CompanyId, SetCompanyId] = useState(prop.id)
    const [ComDee, SetComDee] = useState([])

    // const fetchDataDetail =()=> {
        Axios.get("http://localhost:3001/api/users/" + prop.id ).then(
            res => { 
                SetComDee(res.data)
            })

    return (  
        <div>
            <div className="companyName">
                <h3 className="namecom">Company: {ComDee.companyName}</h3>
            </div>
            <div className="contactdetail">
                <div style={{ padding:'6%' }}>
                <p className='pdetailaddress'>Phone: {ComDee.phoneNumber}</p>
                <p className='pdetailaddress'>Mail: {ComDee.email}</p>
                {/* <p className='pdetailaddress'>Line: intal thailand</p> */}
                <p className='pdetailaddress'>Address: {ComDee.address} </p>
                </div>
            </div>
        </div>         
    );
  }
  
  export default Comdetail;
  