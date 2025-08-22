import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../EditorsInsights/EditorsInsights";
import { News as NewsType } from "../../../types/News";

const News: React.FC = () => {
  const news = useLoaderData() as NewsType;
  const { _id, title, details, image_url, category_id } = news;

  return (
    <div>
      <Card className="shadow-sm">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text className="text-gray-700">{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">
              <FaArrowLeft className="me-2" />
              All News In Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights />
    </div>
  );
};

export default News;
