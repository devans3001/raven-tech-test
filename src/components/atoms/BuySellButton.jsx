import { useState } from "react";
import Trades from "../molecules/Trades";
import { Button } from "../ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function BuySellButton() {
  const [val,setVal] = useState("buy")
  return (
    <div className="w-full flex gap-1.5 mt-3 md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className={"w-1/2 bg-[var(--green)] flex-1"} onClick={()=>setVal("buy")}>Buy</Button>
        </DrawerTrigger>
        <DrawerContent className={"bg-[#20252B]"}>
          <Trades tabVal={val}/>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <DrawerTrigger asChild>
          <Button 
            className={"w-1/2 bg-[var(--red)] flex-1"} 
            onClick={() => setVal("sell")}
          >
            Sell
          </Button>
        </DrawerTrigger>
        <DrawerContent className={"bg-[#20252B]"}>
          <Trades tabVal={val} />
        </DrawerContent>
      </Drawer>
    </div>
  );
}
export default BuySellButton;
