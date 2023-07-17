import * as React from "react"
import image from "../../images/donation-photo.jpg"
export default function ImagePanel() {
  return (
    <div className="sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 min-h-screen">
      <img
        className="object-contain md:object-scale-down"
        alt="donations"
        src={image}
      />
    </div>
  );
  //  className="lg:object-scale sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 min-h-screen
}
