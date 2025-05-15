import LimitPriceInput from "../atoms/LimitPriceInput"
import { Separator } from "../ui/separator"
import { BitButton, SomeTotalComp } from "./TradeBuyLimit"



function TradeBuyMarket() {
  return (
    <div className="space-y-5">

      <div className="space-y-3">
        <LimitPriceInput label="Amount" tip={"Some tips"}/>
        <div className="flex items-center justify-between text-[#A7B1BC] text-xs">
              <p>Total</p>
              <p>0.00</p>
            </div>

            <BitButton/>
      </div>

      <Separator className={"bg-[#394047]"} />

      <SomeTotalComp/>
    </div>
  )
}
export default TradeBuyMarket