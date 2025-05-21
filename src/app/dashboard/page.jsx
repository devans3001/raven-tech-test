"use client";
import Charts from "@/components/molecules/Charts";
import Footer from "@/components/molecules/Footer";
import MainTabGrid from "@/components/molecules/MainTabGrid";
import Order from "@/components/molecules/Order";
import TopInfo from "@/components/molecules/TopInfo";
import Trades from "@/components/molecules/Trades";
import CoinsProvider from "@/hooks/useCoinsProvider";
import { FormProvider } from "@/hooks/useFormLimitBuy";
import { useView } from "@/hooks/useView";
import "@/styles/main/main.css";
import { ToastContainer } from "react-toast";
// import DataQueryProvider from "./DataQueryProvider";

export default function Home() {
  const { isDesktop } = useView();
  return (
    <>
      <CoinsProvider>
<FormProvider>
        <div className=" container h-full">
          <TopInfo />


          {isDesktop ? (
            <div className="grid-container">
              <Charts />
              <Order />
              <Trades />
            </div>
          ) : (
            <MainTabGrid />
          )}
        </div>
        <ToastContainer position="top-center" delay={2000} />

        {/* <Footer /> */}
          </FormProvider>
      </CoinsProvider>
    </>
  );
}
