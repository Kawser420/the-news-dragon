import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="bg-body-tertiary shadow-sm rounded"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle
                  style={{ fontSize: "2.2em" }}
                  className="text-primary me-2"
                />
              )}
              {user ? (
                <Button variant="dark">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
