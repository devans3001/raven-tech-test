import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "@/hooks/useFormLimitBuy";

export function LimitSelect({ label, arr,name }) {
  const { updateFormData } = useFormContext();

  const handleValueChange = (value) => {
    updateFormData(name, value);
  };
  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="text-xs border-none border-0 focus:border-none">
        <SelectValue placeholder={label} className="text-sm" />
      </SelectTrigger>
      <SelectContent className="bg-[#1C2127] border-none border-0 focus:border-none text-white">
        <SelectGroup>
         
          {arr?.map((item, idx) => {
            if (item.flag) {
              return (
                <SelectItem key={idx} value={item.value} className={"flex items-center"}>
                  <span className={`fi ${item.flag} rounded-full`}></span>
                  <p>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </p>
                </SelectItem>
              );
            } else {
              return (
                <SelectItem key={idx} value={item.value} className="text-xs">
                  {item.label}
                </SelectItem>
              );
            }
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
