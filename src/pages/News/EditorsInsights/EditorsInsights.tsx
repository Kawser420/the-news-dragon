import React from "react";
import { Card, Col, Row } from "react-bootstrap";
// import first from "../../../assets/1.png";
// import second from "../../../assets/2.png";
// import third from "../../../assets/3.png";

const EditorsInsights: React.FC = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-4">
      <Col>
        <Card className="h-100 shadow-sm">
          {/* <Card.Img variant="top" src={first} /> */}
          <Card.Body>
            <Card.Title className="fw-bold">Card title</Card.Title>
            <Card.Text className="text-gray-600">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="h-100 shadow-sm">
          {/* <Card.Img variant="top" src={second} /> */}
          <Card.Body>
            <Card.Title className="fw-bold">Card title</Card.Title>
            <Card.Text className="text-gray-600">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="h-100 shadow-sm">
          {/* <Card.Img variant="top" src={third} /> */}
          <Card.Body>
            <Card.Title className="fw-bold">Card title</Card.Title>
            <Card.Text className="text-gray-600">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditorsInsights;
