import React from "react";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header: React.FC = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <p className="text-gray-600 mt-2">Journalism Without Fear or Favour</p>
        <p className="text-gray-500">
          {moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}
        </p>
      </div>
      <div className="d-flex rounded my-4 bg-gray-100 p-2">
        <Button variant="danger" className="me-2">
          Latest
        </Button>
        <Marquee className="text-danger" speed={70}>
          I can be a React component, multiple React components, or just some
          text... I can be a React component, multiple React components, or just
          some text... I can be a React component, multiple React components, or
          just some text...
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
