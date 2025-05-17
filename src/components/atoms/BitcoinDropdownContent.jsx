"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useSearchParamsHook } from "@/hooks/useCustomParams";
import BitcoinCommandItem from "./BitcoinCommandItem";
import BitcoinHeader from "./BitcoinHeader";
import FullScreenLoader from "../molecules/MyLoader";
import { useGetCoins } from "@/lib/service";

export default function BitcoinDropdownContent() {
  const options = ["all", "btc", "usdt"];
  const { getParam } = useSearchParamsHook();

  const activeSymbol = getParam("display") || options[0];
  const { data, isPending } = useGetCoins(activeSymbol);

  // if (isPending) return <FullScreenLoader/>

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px] bg-[var(--first)] p-2" >
      {/* <CommandGroup heading="Select Market" className={"text-white"}> */}
      <CommandInput placeholder="Type a search..." className={"text-white"} />
      {/* </CommandGroup> */}
      <CommandSeparator className={"bg-[#394047]"} />

      <CommandGroup>
        <BitcoinHeader options={options} activeSymbol={activeSymbol} />
      </CommandGroup>
      <CommandSeparator className={"bg-[#394047]"} />

      <CommandList className={"scrollable-div"}>
        <CommandEmpty className="text-foreground">
          No results found.
        </CommandEmpty>

        <CommandGroup heading="" className={""}>
          {isPending ? (
            <FullScreenLoader />
          ) : (
            data?.map((ele) => <BitcoinCommandItem key={ele.name} ele={ele} />)
          )}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
