import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

function SinglePostMediaSlider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      className="flex items-center min-h-full"
    >
      {[1, 2, 3].map((slideNo) => (
        <SwiperSlide key={slideNo} className="">
          <div className="flex flex-1 justify-center items-center overflow-hidden">
            {/* Slide {slideNo} */}
            <img
              className="shrink-0 min-h-full max-h-full max-w-sm md:max-w-md lg:max-w-xl"
              src={`https://picsum.photos/id/${Math.trunc(
                Math.random() * 20
              )}/500`}
              alt={`dummy}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SinglePostMediaSlider;
