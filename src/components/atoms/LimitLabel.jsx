
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function LimitLabel({label,tip}) {
  return (
    <div className="flex-1 flex items-center justify-between  mb-1  w-[40%]">
    <Label className=" text-xs text-muted-foreground flex items-center  w-full">
        <span className="">

     {label}
        </span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info size={14} className=" text-muted-foreground cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent className="text-xs max-w-xs">
            {tip}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Label>
  </div>
  )
}
export default LimitLabel