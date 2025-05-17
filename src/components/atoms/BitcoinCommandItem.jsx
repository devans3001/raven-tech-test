import Image from "next/image"
import { CommandItem } from "../ui/command"
import { useSearchParamsHook } from "@/hooks/useCustomParams";

import bit from "@/assets/bitcoin.png";
import { formatMoney, formatNumber } from "@/lib/helper";


function BitcoinCommandItem({ele}) {
const {name,image,current_price,ath_change_percentage} = ele

    // console.log(formatMoney("12345678",0))
    const {setParam} = useSearchParamsHook();
      function hanldeSelect(item) {
        setParam("selectedSymbol", item);
      }
  return (
    <CommandItem onSelect={() => hanldeSelect(name)} className={"flex justify-between gap-5"}>
    <div className="flex gap-3 py-1">
      <Image src={image} alt="" width={30} height={25} />
      <p>{name}</p>
    </div>

    <div className="flex-1 px-4 text-right">
      {formatMoney(current_price)}
    </div>
    <div className="text-[var(--green)]">
      {`${ath_change_percentage}%`}
    </div>
    </CommandItem>
  )
}
export default BitcoinCommandItem