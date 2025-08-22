import React, { useState } from "react";

interface CustomRatingProps {
  readonly?: boolean;
  initialRating?: number;
  emptySymbol: React.ReactElement;
  fullSymbol: React.ReactElement;
  onChange?: (rating: number) => void;
}

const CustomRating: React.FC<CustomRatingProps> = ({
  readonly = false,
  initialRating = 0,
  emptySymbol,
  fullSymbol,
  onChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (newRating: number) => {
    if (!readonly) {
      setRating(newRating);
      onChange?.(newRating);
    }
  };

  return (
    <div className="d-flex">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hoverRating || rating);
        return (
          <span
            key={star}
            onClick={() => handleClick(star)}
            onMouseEnter={() => !readonly && setHoverRating(star)}
            onMouseLeave={() => !readonly && setHoverRating(0)}
            className="cursor-pointer"
            style={{ cursor: readonly ? "default" : "pointer" }}
          >
            {React.cloneElement(isFilled ? fullSymbol : emptySymbol)}
          </span>
        );
      })}
    </div>
  );
};

export default CustomRating;
