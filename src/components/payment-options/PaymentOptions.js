import * as React from "react"
import Fundraising from "../../images/logos/Fundraising Regulator.svg"
import Visa from "../../images/logos/Visa.svg"
import Mastercard from "../../images/logos/Mastercard.svg"
import ApplePay from "../../images/logos/Apple Pay.svg"
import GooglePay from "../../images/logos/Google Pay.svg"
export default function PaymentOptions() {
  return (
    <div className="flex justify-center flex-wrap-reverse gap-x-2.5 p-5">
      <img alt="Fundraising Regulator" src={Fundraising} />
      <img alt="Visa" src={Visa} />
      <img alt="Mastercard" src={Mastercard} />
      <img alt="Apple Pay" src={ApplePay} />
      <img alt="Google Pay" src={GooglePay}/>
    </div>
  );
}
