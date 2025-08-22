import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "./Q-Zone/QZone";

const RightNav: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Login With</h3>
        <div className="d-flex flex-column gap-2">
          <Button
            variant="outline-primary"
            className="d-flex align-items-center justify-content-center gap-2"
          >
            <FaGoogle /> Login with Google
          </Button>
          <Button
            variant="outline-dark"
            className="d-flex align-items-center justify-content-center gap-2"
          >
            <FaGithub /> Login with Github
          </Button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Find Us On</h3>
        <ListGroup>
          <ListGroup.Item className="d-flex align-items-center gap-2 border-0 px-0 py-2">
            <FaFacebook className="text-blue-600" />
            <span className="text-gray-700">Facebook</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center gap-2 border-0 px-0 py-2">
            <FaTwitter className="text-blue-400" />
            <span className="text-gray-700">Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center gap-2 border-0 px-0 py-2">
            <FaInstagram className="text-pink-600" />
            <span className="text-gray-700">Instagram</span>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <Qzone />
    </div>
  );
};

export default RightNav;
