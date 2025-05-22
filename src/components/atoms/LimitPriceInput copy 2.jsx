"use client";

import { Input } from "@/components/ui/input";

import { useEffect, useRef, useState,useMemo } from "react";
import LimitLabel from "./LimitLabel";
import { formatNumber } from "@/lib/helper";
import { LimitSelect } from "./LimitSelect";


export default function LimitPriceInput({ label, tip, name,value,onChange,...props }) {
  
  const inputRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(value || "0.00");

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleFocus = () => {
      if (input.value === "0.00") {
        setDisplayValue("");
      }
    };

    input.addEventListener("focus", handleFocus);
    return () => input.removeEventListener("focus", handleFocus);
  }, []);

  const handleChange = (e) => {
    const rawValue = e.target.value;

    if (rawValue === "") {
      setDisplayValue("");
      onChange({ target: { value: "", name } });
      return;
    }
    const formattedValue = formatNumber(rawValue);
    setDisplayValue(formattedValue);
    
    // Convert back to raw number for form submission
    const numValue = parseFloat(formattedValue.replace(/,/g, '')) || 0;
    onChange({
      target: {
        value: numValue.toFixed(2),
        name: name
      }
    });
  };

  return (
    <div className=" rounded-md border border-[#373B3F] pl-3 pr-1 py-1 w-full text-white flex items-center">
      <LimitLabel label={label} tip={tip} />

    
        <div className="relative w-[60%]">
          <Input
            type="text"
            ref={inputRef}
            className="bg-transparent text-right w-full text-white text-xs pr-10 focus-visible:ring-0 focus-visible:ring-offset-0 border-none focus:border-none"
            value={displayValue}
            onChange={handleChange}
            {...props}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground pointer-events-none">
            USD
          </span>
        </div>
    </div>
  );
}
