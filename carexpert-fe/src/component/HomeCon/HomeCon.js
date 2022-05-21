import React, { Component } from "react";
import {Navbar, Container, Nav } from "react-bootstrap";
import {Navigate} from 'react-router-dom';
import { Outlet,NavLink } from "react-router-dom";



class HomeCon extends Component {
  render() {
    if (sessionStorage.getItem("usertoken") === null) {
      return <Navigate to="/" replace={true} />;
    }
    if(JSON.parse(sessionStorage.getItem('userData')).org === 'H'){
      return(<>
      <Navbar bg="light" expand="lg" style = {{position:'sticky',top:62}}>
      <Container>
      <Nav defaultActiveKey="/Home/Hos/PatientReg" as="ul" variant="tabs">
      {false && (<Nav.Item as="li">
        <Nav.Link as={NavLink} to="/Home/Hos/Profile">Profile</Nav.Link>
      </Nav.Item>)}
      <Nav.Item as="li">
        <Nav.Link as={NavLink} to="/Home/Hos/Patients">Patients</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={NavLink} to="/Home/Hos/Doctors">Doctors</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={NavLink} to="/Home/Hos/PatientReg">Register Patient</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={NavLink} to="/Home/Hos/DoctorReg">Register Doctor</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    </Navbar>
       <Outlet/></>
      )
      
    }
    else if(JSON.parse(sessionStorage.getItem('userData')).org === 'D'){
      return(<>
      <Navbar bg="light" expand="lg" style = {{position:'sticky',top:62}}>
      <Container>
        <Nav defaultActiveKey="/Home/Doc/Patients" as="ul" variant="tabs" sticky="top">
        {false && (<Nav.Item as="li">
          <Nav.Link as={NavLink} to="/Home/Doc/Profile">Profile</Nav.Link>
        </Nav.Item>)}
        <Nav.Item as="li">
          <Nav.Link as={NavLink} to="/Home/Doc/Patients">Patients</Nav.Link>
        </Nav.Item>
      </Nav>
      </Container>
    </Navbar>
         <Outlet/></>
        )
    }
    return(<>
      <Navbar bg="light" expand="lg" style = {{position:'sticky',top:62}}>
      <Container>
      <Nav defaultActiveKey="/Home/Pat/Profile/default" as="ul" variant="tabs" >
      <Nav.Item as="li">
        <Nav.Link as={NavLink} to="/Home/Pat/Profile/default">Profile</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    </Navbar>
       <Outlet/></>
      )
  }
}

export default HomeCon;
