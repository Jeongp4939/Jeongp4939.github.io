import React from "react";

const Carousel = () => {
  return (
    <div className="container">
      <div className="carouselWrapper">
        <button type="button" className="swipeLeft">
          <ChevronLeft />
        </button>
        <button type="button" className="swipeLeft">
          <ChevronRight />
        </button>
        <ul className="carousel">
          {curList?.map((item,idx)=>{
            const key = `${item}-${idx}`

            return (
              <li key={key} className="carouselItem">
                
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
