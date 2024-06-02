// "use client";

import { Carousel } from "flowbite-react";
import Carousel1 from "../images/carousel/carousel-1.svg";

export function Slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      {/* <Carousel leftControl="left" rightControl="right"> */}
      <Carousel>
        <img
          // src="././/images/carousel/carousel-1.svg"
          src={Carousel1}
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
