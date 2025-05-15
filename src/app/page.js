import Order from "@/components/molecules/Order";
import TopInfo from "@/components/molecules/TopInfo";
import Trades from "@/components/molecules/Trades";
import "@/styles/main/main.css";

export default function Home() {
  return (
    <div className="container">
      <TopInfo/>

      <div className="grid-container">
        <div className="candle"></div>
        <Order/>
        <Trades/>
      </div>
        <div className="bottom"></div>
    </div>
  );
}
