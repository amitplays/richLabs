import React, { useState } from "react";

function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="carousel">
      <button className="btn btn-prev" onClick={handlePrev}>
        Prev
      </button>
      <div className="carousel-items">
        {items.map((item, i) => (
          <div
            key={i}
            className={`carousel-item${i === index ? " active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="btn btn-next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Carousel;
