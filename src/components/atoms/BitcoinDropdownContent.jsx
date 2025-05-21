"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import BitcoinCommandItem from "./BitcoinCommandItem";
import BitcoinHeader from "./BitcoinHeader";
import FullScreenLoader from "../molecules/MyLoader";

import { useSearchParamsHook } from "@/hooks/useCustomParams";
import { useCoins } from "@/hooks/useCoinsProvider";

export default function BitcoinDropdownContent() {
  const options = ["all", "btc", "usdt"];
    const { getParam } = useSearchParamsHook();
  
    const activeDisplay = getParam("display") || options[0];
    const {data:coins,isPending} = useCoins()


  // const { data:coins, isPending } = useGetCoins();
  // const { data:coin, isPending:isLoading } = useGetCoinsBySymbol(activeDisplay !== "all" && activeDisplay);

  const coin = coins.filter((coin) => coin.symbol === activeDisplay);
  const data = activeDisplay === "all" ? coins : coin;

  // if (isPending) return <FullScreenLoader/>

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px] bg-[var(--first)] p-2 max-md:w-[80dvw]">
      {/* <CommandGroup heading="Select Market" className={"text-white"}> */}
      <CommandInput placeholder="Type a search..." className={"text-white"} />
      {/* </CommandGroup> */}
      <CommandSeparator className={"bg-[#394047]"} />

      <CommandGroup>
        <BitcoinHeader options={options} activeDisplay={activeDisplay} />
      </CommandGroup>
      <CommandSeparator className={"bg-[#394047]"} />

      <CommandList className={"scrollable-div"}>
        <CommandEmpty className="text-foreground">
          No results found.
        </CommandEmpty>

        <CommandGroup heading="" className={""}>
          {isPending  ? (
            <FullScreenLoader />
          ) : (
            data?.map((ele) => <BitcoinCommandItem key={ele.name} ele={ele} />)
          )}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
