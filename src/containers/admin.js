import Nav from "../navbar/navAdmin"
import {Button, Col, Row} from 'react-bootstrap';
import '../styles/App.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";

const Admin =()=> {
    const [regcompany, setReg] = useState([])
    let body = {
        type: 'approve'
    }
    const fetchData =()=> {
      Axios.get("http://localhost:3001/api/admins/pending").then(
          res => {
            setReg(res.data)
          })
    }

    useEffect(() => {
      fetchData();
      
    }, [regcompany]);
    
    return (
      <div className="App">
        <Nav/>
        <div className='container'>
                    <h3>Manage User</h3>
                    <table className="table">
                      <thead>
                        <tr>
                        <th scope="col">Company</th>
                          <th scope="col">PhoneNumber</th>
                          <th scope="col">Email</th>
                          <th scope="col">State</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        { regcompany.map(item =>
                            <tr>
                                 <td>{item.companyName}</td>
                                 <td>{item.phoneNumber}</td>
                                 <td>{item.email}</td>
                                 <td>{item.type}</td>
                                 <td><Button onClick={()=> Axios.put("http://localhost:3001/api/admins/approve/" + item._id, body)}>approve</Button></td>
                                 <td><Button onClick={()=> Axios.delete("http://localhost:3001/api/admins/reject/" + item._id)}>reject</Button></td>
                            </tr>
                            )}
                            

                      </tbody>
                    </table>
                    </div>
                  </div>
                

    );
  }
  
  export default Admin;
  