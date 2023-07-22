import * as React from "react"
import image from "../../images/donation-photo.jpg"
export default function ImagePanel() {
  return (
    <div className="w-full md:w-1/2 md:h-screen">
      <img
        className="md:object-cover md:h-screen"
        alt="donations"
        src={image}
      />
    </div>
  );
}
