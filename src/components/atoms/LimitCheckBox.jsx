

"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LimitCheckBox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" className={"data-[state=checked]:bg-[#2764FF]"}/>
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
