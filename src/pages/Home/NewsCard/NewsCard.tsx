import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  FaEye,
  FaRegBookmark,
  FaShareAlt,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import CustomRating from "../../../components/Rating/CustomRating";
import { News } from "../../../types/News";

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header className="d-flex align-items-center">
        <div>
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        </div>
        <div className="ps-2 flex-grow-1">
          <p className="mb-0 fw-medium">{author?.name}</p>
          <p className="mb-0 text-muted small">
            {moment(author?.published_date).format("yyyy-MM-D")}
          </p>
        </div>
        <div className="d-flex gap-2">
          <FaRegBookmark className="text-muted cursor-pointer" />
          <FaShareAlt className="text-muted cursor-pointer" />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} className="mb-3 rounded" />
        <Card.Text className="text-gray-700">
          {details.length < 250 ? (
            details
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link
                to={`/news/${_id}`}
                className="text-blue-600 hover:underline ms-1"
              >
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1 d-flex align-items-center">
          <CustomRating
            readonly
            initialRating={rating?.number}
            emptySymbol={<FaRegStar className="text-warning" />}
            fullSymbol={<FaStar className="text-warning" />}
          />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div className="d-flex align-items-center">
          <FaEye className="me-2" />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
