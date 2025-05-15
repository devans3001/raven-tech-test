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

export function LimitSelect({ label, arr }) {
  return (
    <Select className=" ">
      <SelectTrigger className="text-xs border-none border-0 focus:border-none">
        <SelectValue placeholder={label} className="text-sm" />
      </SelectTrigger>
      <SelectContent className="bg-[#1C2127] border-none border-0 focus:border-none text-white">
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          {arr?.map((item, idx) => {
            if (item.flag) {
              return (
                <SelectItem key={idx} value={item.value} className={"flex items-center"}>
                  <span className={`fi ${item.flag} rounded-full`}></span>
                  <p>
                    <h2>{item.label}</h2>
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
