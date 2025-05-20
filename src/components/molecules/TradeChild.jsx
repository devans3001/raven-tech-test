"use client";
import { useState } from "react";
import { TabsContent } from "../ui/tabs";
import TradeBuyLimit from "./TradeBuyLimit";
import TradeBuyMarket from "./TradeBuyMarket";
import TradeBuyStopLimit from "./TradeBuyStopLimit";
import { FormProvider } from "@/hooks/useFormLimitBuy";

export default function TradeChild({val}) {
  const options = ["Limit", "Market", "Stop-Limit"];
  const [activeTab, setActiveTab] = useState("Limit");

  return (
    <TabsContent value={val}>
      <div className="flex items-center justify-between my-2 text-[#A7B1BC]">
        {options.map((item) => (
          <p
            key={item}
            className={`cursor-pointer px-3 py-1 rounded-[50px] transition-colors duration-200 ${
              activeTab === item
                ? "bg-[#353945] text-white"
                : "hover:text-white"
            }`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <FormProvider>
      {activeTab === "Limit" && <TradeBuyLimit />}
      {activeTab === "Market" && <TradeBuyMarket />}
      {activeTab === "Stop-Limit" && <TradeBuyStopLimit />}
      </FormProvider>

    </TabsContent>
  );
}
