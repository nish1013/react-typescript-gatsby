import * as React from "react"
import "./styles.css";
import PaymentOptions from "../payment-options/PaymentOptions";

export default function DonationPanel() {
  //TODO organise tailwindcss
  const classRegular =
    "Button w-1/2 border hover:text-white font-bold my-2 mx-2 py-2 px-4 rounded-full";
  const classValueBtns =
    "Button w-50 border hover:text-white font-bold mx-2 py-2 px-4 rounded-full";
  const classDonateBtn =
    "DonateButton w-full bg-amber-400 hover:bg-amber-500 font-bold my-4 py-4 px-4 rounded-full";
  return (
    <div className="DonationPanel flex flex-col justify-center justify-items-center py-60 px-8 bg-amber-500 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 lg:min-h-screen xl:min-h-screen 2xl:min-h-screen">
      <h1 className="text-4xl font-bold">Make a</h1>
      <h1 className="text-4xl font-bold">donation</h1>
      <p className="py-2">Do something amazing</p>
      <div className="flex justify-even">
        <button className={classRegular}>Single</button>
        <button className={classRegular}>Regular</button>
      </div>
      <div>
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
