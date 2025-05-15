
import LimitCheckBox from "../atoms/LimitCheckBox";
import LimitPriceInput from "../atoms/LimitPriceInput";

import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { BitButton, SomeTotalComp } from "./TradeBuyLimit";


function TradeBuyStopLimit() {
  return (
    <div className="mt-2 ">
    <ScrollArea className="h-[60dvh] ">
      <div className="space-y-4">
        <div className="space-y-3">
          <LimitPriceInput
            label="Triger price"
            tip="Set the maximum price you're willing to pay."
          />
          <LimitPriceInput
            label="Limit price"
            tip="Set the maximum price you're willing to pay."
          />
          <LimitPriceInput
            label="Amount"
            tip="Enter the amount you want to trade."
          />
          <LimitPriceInput
            label="Type"
            tip="This is the total cost of your trade."
            isSelect={"true"}
          />

          <LimitCheckBox />
          <div className="flex items-center justify-between text-[#A7B1BC] text-xs">
            <p>Total</p>
            <p>0.00</p>
          </div>

          <BitButton/>
        </div>

        <Separator className={"bg-[#394047]"} />

       <SomeTotalComp/>
      </div>
    </ScrollArea>
  </div>
  )
}
export default TradeBuyStopLimit