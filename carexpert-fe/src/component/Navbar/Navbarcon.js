import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import LogOut from "../LogOut";
import { NavLink } from "react-router-dom";




class Navbarcon extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <bold>CareXpert</bold>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="justify-content-end" variant="tabs">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/HospitalReg">
                  Register Hospital
                </Nav.Link>
                <NavDropdown title="Logins" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/HospitalLogin">
                    Hospital
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/DoctorLogin">
                    Doctor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/PatientLogin">
                    Patient
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        you should logged in as <strong>Hospital</strong>.
                      </Tooltip>
                    }
                  >
                    <NavDropdown.Item href="/Home/Hos/DoctorReg">
                      Register Doctor
                    </NavDropdown.Item>
                  </OverlayTrigger>
                  <OverlayTrigger
placement="bottom"
overlay={
  <Tooltip>
    you should logged in as <strong>Hospital</strong>.
  </Tooltip>
}
>
<NavDropdown.Item href="/Home/Hos/PatientReg">
                    Register Patient
                  </NavDropdown.Item>
</OverlayTrigger>

                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <OverlayTrigger
placement="bottom"
overlay={
  <Tooltip>
    you should be <strong>logged in</strong>.
  </Tooltip>
}
>
<Nav.Link href="/Home">
              <Button variant="outline-danger">Alert</Button>
            </Nav.Link>
</OverlayTrigger>
            <LogOut />
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navbarcon;
