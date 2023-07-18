import * as React from "react"
import "./styles.css";
import PaymentOptions from "../payment-options/PaymentOptions";

export default function DonationPanel() {
  //TODO organise tailwindcss
  const classRegular =
    "Button min-w-1/4 border hover:text-white font-bold my-2 mx-2 py-2 px-4 rounded-full";
  const classValueBtns =
    "Button min-w-1/8 border hover:text-white font-bold mx-2 py-2 px-4 rounded-full";
  const classDonateBtn =
    "DonateButton w-1/2 self-center bg-amber-400 hover:bg-amber-500 font-bold my-4 py-4 px-4 rounded-full";
  return (
    <div className="DonationPanel flex flex-col justify-center py-40 px-8 w-full">
     <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Make a</h1>
      <h1 className="text-4xl font-bold">donation</h1>
      <p className="py-2">Do something amazing</p>
      </div>
      <div className="flex justify-center">
        <button className={classRegular}>Single</button>
        <button className={classRegular}>Regular</button>
      </div>
      <div className="flex justify-center">
        <button className={classValueBtns}>£5</button>
        <button className={classValueBtns}>£10</button>
        <button className={classValueBtns}>£20</button>
        <button className={classValueBtns}>£50</button>
      </div>
      <button className={classDonateBtn}>Donate</button>
      <PaymentOptions />
    </div>
  );
}
