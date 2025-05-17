"use client";

import * as React from "react";
import bit from "@/assets/bitcoin.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ChevronDown } from "lucide-react"; 
import  BitcoinDropdownContent  from "./BitcoinDropdownContent";

export function BitcoinIcon() {
  const [position, setPosition] = React.useState("top");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="border-0 border-none focus:border-0"
      >
        <Button
          variant="outline"
          className={
            "flex items-center bg-[#20252B] text-white border-0 hover:bg-transparent hover:text-white focus:border-0"
          }
        >
          <Image src={bit} alt="Bitcoin icon" width={40} height={40} />
          <p className="text-xl">BTC/USDT</p>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit bg-transparent border-0 border-none  shadow-md">
    

        <BitcoinDropdownContent />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
