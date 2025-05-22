"use client";
import { coun } from "@/lib/fakeData";
import LimitCheckBox from "../atoms/LimitCheckBox";
import LimitPriceInput from "../atoms/LimitPriceInput";
import { LimitSelect } from "../atoms/LimitSelect";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { goodArr } from "@/lib/fakeData";
import { memo, useMemo } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { toast } from "react-toast";

function TradeBuyLimit() {
  // const [storedForm, setStoredForm] = useLocalStorageState(
  //   {
    
  //   },
  //   "buy-limit-form"
  // );

  const methods = useForm({
    defaultValues: {
      price: "0.00",
      amount: "0.00",
      type: "good",
      postOnly: false,
    },
  });

  const { control, handleSubmit } = methods;

  const onSubmit = (data) => {
    toast("lol")
    // setStoredForm(data);
  };

  // Memoize arrays to prevent unnecessary re-renders
  const memoizedGoodArr = useMemo(() => goodArr, []);
  const memoizedCoun = useMemo(() => coun, []);

  return (
    <div className="mt-2">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ScrollArea className="h-[60dvh]">
            <div className="space-y-4">
              <div className="space-y-3">
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <LimitPriceInput
                      label="Limit price"
                      tip="Set the maximum price you're willing to pay."
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="amount"
                  control={control}
                  render={({ field }) => (
                    <LimitPriceInput
                      label="Amount"
                      tip="Enter the amount you want to trade."
                      {...field}
                    />
                  )}
                />
                {/* <Controller
                  name="type"
                  control={control}
                  render={({ field }) => ( */}
                    <LimitSelect
                      label="Good for you"
                      namee="type"
                      control={control}
                      arr={memoizedGoodArr}
                    
                    />
                  {/* )}
                /> */}
                <Controller
                  name="postOnly"
                  control={control}
                  render={({ field }) => <LimitCheckBox {...field} />}
                />
                <div className="flex items-center justify-between text-[#A7B1BC] text-xs">
                  <p>Total</p>
                  <p>0.00</p>
                </div>
                <BitButton />
              </div>
              <Separator className={"bg-[#394047]"} />
              <SomeTotalComp arr={memoizedCoun} />
            </div>
          </ScrollArea>
        </form>
      </FormProvider>
    </div>
  );
}

export default memo(TradeBuyLimit);

export const SomeTotalComp = memo(function SomeTotalComp({ arr }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs">
          Total <br />
          <span>0.00</span>
        </p>
        <LimitSelect label="NGN" arr={arr} />
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
});

export const BitButton = memo(function BitButton() {
  return (
    <Button className="w-full bg-gradient-to-r from-[#483BEB] via-[#7847E1] to-[#DD568D]">
      Buy BTC
    </Button>
  );
});