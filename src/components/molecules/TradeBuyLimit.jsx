import { coun } from "@/lib/fakeData";
import LimitCheckBox from "../atoms/LimitCheckBox";
import LimitPriceInput from "../atoms/LimitPriceInput";
import { LimitSelect } from "../atoms/LimitSelect";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

function TradeBuyLimit() {
  return (
    <div className="mt-2 ">
      <ScrollArea className="h-[60dvh] ">
        <div className="space-y-4">
          <div className="space-y-3">
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
  );
}
export default TradeBuyLimit;


export function SomeTotalComp(){
    return  <div className="space-y-4">
    <div className="flex items-center justify-between">
        <p className="text-xs">
            Total <br />
            <span>0.00</span>
        </p>
        <LimitSelect label="NGN" arr={coun}/>
    </div>
    <div className="flex items-center justify-between text-xs">
        <p className="">
            Open Order <br />
            <span>0.00</span>
        </p>
       <p>
        Available <br /> 0.00
       </p>
    </div>
    <Button className={"bg-[#2764FF]"}>
        Deposit
    </Button>
  </div>
}

export function BitButton(){
    return <Button className="w-full bg-gradient-to-r from-[#483BEB] via-[#7847E1] to-[#DD568D]">
    Buy BTC
  </Button>
}