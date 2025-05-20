import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import LimitLabel from "./LimitLabel";

export function LimitSelect({ label, arr, name = "type", control }) {

  // console.log("limit select")
  // Local state fallback if `control` is not provided
  const [localValue, setLocalValue] = useState("");

  // If `control` is provided, use `Controller` (react-hook-form)
  if (control) {
    return (
      <Controller
        name={name}
        defaultValue=""
        control={control}
        render={({ field }) => (
          <div className=" rounded-md border border-[#373B3F] pl-3 pr-1 py-1 w-full text-white flex items-center">
      <LimitLabel label={"type"} tip={"This is the total cost of your trade."} />
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="text-xs border-none focus:border-none">
              <SelectValue placeholder={label} className="text-sm" />
            </SelectTrigger>
            <SelectContent className="bg-[#1C2127] border-none text-white">
              <SelectGroup>
                {arr?.map((item, idx) => (
                  <SelectItem key={idx} value={item.value}>
                    {item.flag ? (
                      <div className="flex items-center">
                        <span className={`fi ${item.flag} rounded-full`}></span>
                        <span>{item.label}</span>
                      </div>
                    ) : (
                      item.label
                    )}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
        )}
      />
    );
  }

  // If no `control`, use local state (standalone mode)
  return (
    <div className=" rounded-md border border-[#373B3F] pl-3 pr-1 py-1 w-full text-white flex items-center">
      <LimitLabel label={"type"} tip={"This is the total cost of your trade."} />
    <Select value={localValue} onValueChange={setLocalValue}>
      <SelectTrigger className="text-xs border-none focus:border-none">
        <SelectValue placeholder={label} className="text-sm" />
      </SelectTrigger>
      <SelectContent className="bg-[#1C2127] border-none text-white">
        <SelectGroup>
          {arr?.map((item, idx) => (
            <SelectItem key={idx} value={item.value}>
              {item.flag ? (
                <div className="flex items-center">
                  <span className={`fi ${item.flag} rounded-full`}></span>
                  <span>{item.label}</span>
                </div>
              ) : (
                item.label
              )}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  );
}