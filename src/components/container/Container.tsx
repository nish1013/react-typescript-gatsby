import * as React from "react"
import DonationPanel from "../donation-panel/DonationPanel";
import ImagePanel from "../image-panel/ImagePanel";

export default function Container() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <ImagePanel />
      <DonationPanel />
    </div>
  );
}
