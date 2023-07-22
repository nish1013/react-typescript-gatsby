import * as React from "react"
import "./styles.css";
import {navigate} from 'gatsby'; //import navigate from gatsby
export default function MainPage() {
    const classDonateBtn =
    "DonateButton w-1/2 self-center bg-amber-400 hover:bg-amber-500 font-bold my-4 py-4 px-4 rounded-full";
    return (
    <div className="MainPage flex flex-col items-center">
        <h1 className="Header text-4xl font-bold p-4 my-8">You're about to do something really incredible</h1>
        <p>We provide young people with tools to look after their mental health. We empower adults to be the best support they can be to the young people in their lives. And we give young people the space and confidence to get their voices heard and change the world we live in.</p>
        <button onClick={()=> navigate('donations')} className={classDonateBtn}>Make a Donation</button>
      </div>
    )
}