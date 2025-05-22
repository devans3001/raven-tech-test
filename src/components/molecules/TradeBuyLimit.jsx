import { coun } from "@/lib/fakeData";
import LimitCheckBox from "../atoms/LimitCheckBox";
import LimitPriceInput from "../atoms/LimitPriceInput";
import { LimitSelect } from "../atoms/LimitSelect";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { FormProvider, useFormContext } from "@/hooks/useFormLimitBuy";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { formatMoney } from "@/lib/helper";

function TradeBuyLimit() {
  const [recentTrades, setRecentTrades] = useLocalStorageState(
    "recentTrades",
    []
  );
  const { formData, reset } = useFormContext();
  const price = parseFloat(formData["price"]);
  const amount = parseFloat(formData["amount"]);

  const total = (price * amount).toFixed(2);
  function inSubmit(e) {
    e.preventDefault();


    const newOrder = {
      ...formData,
      total,
      timestamp: Date.now(),
    };

    setRecentTrades((prev) => [newOrder, ...prev.slice(0, 10)]);

    reset();
  }

  return (
    <div className="mt-2 ">
      <form onSubmit={inSubmit}>
        <ScrollArea className="h-[60dvh] overflow-y-hidden">
          <div className="space-y-4">
            <div className="space-y-3">
              <LimitPriceInput
                label="Limit price"
                name={"price"}
                tip="Set the maximum price you're willing to pay."
              />
              <LimitPriceInput
                label="Amount"
                name="amount"
                tip="Enter the amount you want to trade."
              />
              <LimitPriceInput
                label="Type"
                name="type"
                tip="This is the total cost of your trade."
                isSelect={"true"}
              />

              <LimitCheckBox name="postOnly" />
              <div className="flex items-center justify-between text-[#A7B1BC] text-xs">
                <p>Total</p>
                <p>{formatMoney(total)}</p>
              </div>

              <BitButton />
            </div>

            <Separator className={"bg-[#394047]"} />

            <SomeTotalComp total={total} />
          </div>
        </ScrollArea>
      </form>
    </div>
  );
}
export default TradeBuyLimit;

export function SomeTotalComp() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs">
          Total <br />
          <span>0.00</span>
        </p>
        <LimitSelect label="NGN" arr={coun} />
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
      <Button className={"bg-[#2764FF]"}>Deposit</Button>
    </div>
  );
}

export function BitButton() {
  return (
    <Button className="w-full bg-gradient-to-r from-[#483BEB] via-[#7847E1] to-[#DD568D]">
      Buy BTC
    </Button>
  );
}
