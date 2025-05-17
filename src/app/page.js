"use client";
import Footer from "@/components/molecules/Footer";
import Order from "@/components/molecules/Order";
import TopInfo from "@/components/molecules/TopInfo";
import Trades from "@/components/molecules/Trades";
import "@/styles/main/main.css";
import { ToastContainer } from "react-toast";
// import DataQueryProvider from "./DataQueryProvider";

export default function Home() {
  return (
    <>
    {/* <DataQueryProvider> */}

        <div className="container">
          <TopInfo />

          <div className="grid-container">
            <div className="candle"></div>
            <Order />
            <Trades />
          </div>
          <div className="bottom"></div>
        </div>
        <ToastContainer />

        <Footer />
    {/* </DataQueryProvider> */}
    </>
  );
}
