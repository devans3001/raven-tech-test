

"use client";

import { Input } from "@/components/ui/input";

import { useEffect, useRef, useState } from "react";
import LimitLabel from "./LimitLabel";
import {
  formatNumber,
  formatNumberWithCommas,
  parseFormattedNumber,
} from "@/lib/helper";
import { LimitSelect } from "./LimitSelect";
import { goodArr } from "@/lib/fakeData";
import { useFormContext } from "@/hooks/useFormLimitBuy";

export default function LimitPriceInput({ label, tip, isSelect, name }) {
  const {formData, updateFormData } = useFormContext();
  const [price, setPrice] = useState("0.00");
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleFocus = () => {
      if (input.value === "0.00") {
        setPrice("");
        updateFormData(name, "");
      }
    };

    input.addEventListener("focus", handleFocus);

    return () => {
      input.removeEventListener("focus", handleFocus);
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    setPrice(formatNumber(value));
    updateFormData(name, parseFormattedNumber(value));
  };

  return (
    <div className=" rounded-md border border-[#373B3F] pl-3 pr-1 py-1 w-full text-white flex items-center">
      <LimitLabel label={label} tip={tip} />

      {isSelect ? (
        <LimitSelect label={"Good till cancelled"} arr={goodArr} name={name}/>
      ) : (
        <div className="relative w-[60%]">
          <Input
            type="text"
            ref={inputRef}
            className="bg-transparent text-right w-full text-white text-xs pr-10 focus-visible:ring-0 focus-visible:ring-offset-0 border-none focus:border-none"
            value={formData[name]}
            onChange={handleChange}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground pointer-events-none">
            USD
          </span>
        </div>
      )}
    </div>
  );
}