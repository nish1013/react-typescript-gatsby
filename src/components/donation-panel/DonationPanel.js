import * as React from "react"
import "./styles.css";
import PaymentOptions from "../payment-options/PaymentOptions";
import Amount from "./Amount";

export default function DonationPanel() {
  const singleAmounts = [5,10,20,50];
  const regularAmounts = [10, 20, 30, 40];
  const singleType = 'single';
  const regularType = 'regular';
  const [type, setType] = React.useState(singleType);
  const [amountSelected, setAmountSelected] = React.useState(Math.max(...singleAmounts));
  const updateType = (type) => setType(type);
  const amounts = type === regularType ? regularAmounts : singleAmounts;

  //TODO organise tailwindcss
  const classType =
    "Button min-w-1/4 border font-bold my-2 mx-2 py-3 px-10 rounded-full";
  const classTypeSelected = "Button-selected min-w-1/4 border text-white font-bold my-2 mx-2 py-3 px-10 rounded-full";
    
  const classDonateBtn =
    "DonateButton w-1/4 self-center bg-amber-400 hover:bg-amber-500 font-bold my-4 py-4 px-4 rounded-full";
  return (
    <div className="DonationPanel flex flex-col justify-center py-40 px-8 w-full">
     <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Make a</h1>
      <h1 className="text-4xl font-bold">donation</h1>
      <p className="py-2">Do something amazing</p>
      </div>
      <div className="flex justify-center">
        <div className={type === singleType ? classTypeSelected: classType} onClick={() => {updateType(singleType); setAmountSelected(Math.max(...singleAmounts))}}>Single</div>
        <div className={type === regularType ? classTypeSelected: classType} onClick={() => {updateType(regularType);setAmountSelected(Math.max(...regularAmounts))}}>Regular</div>
      </div>
      <div className="flex justify-center">
        {
        amounts.map(
          (amount) => (<Amount key={amount} amount={amount} selected={amount === amountSelected} onClickBtn={() => setAmountSelected(amount)}/>)
          )}
      </div>
      <button className={classDonateBtn}>Donate</button>
      <PaymentOptions />
    </div>
  );
}
