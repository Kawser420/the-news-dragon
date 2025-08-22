import React from "react";
import Header from "../pages/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Shared/RightNab";
import { Outlet } from "react-router-dom";

const NewsLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav /> {/* Changed from RightNab to RightNav */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsLayout;
