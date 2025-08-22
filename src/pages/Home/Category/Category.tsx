import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import { News } from "../../../types/News";

const Category: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const categoryNews = useLoaderData() as News[];

  return (
    <div>
      {id && (
        <h2 className="text-2xl font-bold mb-4">
          Category News: {categoryNews.length}
        </h2>
      )}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
