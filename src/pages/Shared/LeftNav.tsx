import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../../types/Category"; // Import the Category interface

const LeftNav: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]); // Use the Category interface here

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-gray-800">All Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <p key={category.id} className="mb-2">
            <Link
              to={`/category/${category.id}`}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 block py-1"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
