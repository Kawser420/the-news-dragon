import React from "react";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNav";
import RightNav from "../pages/Shared/RightNab";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav /> {/* Changed from RightNab to RightNav */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
