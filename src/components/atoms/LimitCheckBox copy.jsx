

"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useFormContext } from "@/hooks/useFormLimitBuy";

export default function LimitCheckBox({name}) {
  const { updateFormData, formData } = useFormContext();
  
  const handleCheckedChange = (checked) => {
    updateFormData(name, checked);
  };
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className={"data-[state=checked]:bg-[#2764FF]"}  checked={formData[name] || false}
        onCheckedChange={handleCheckedChange} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#A7B1BC]"
      >
        Post Only
      </label>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info size={14} className=" text-muted-foreground cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="text-xs max-w-xs">
            some tip goes here
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
