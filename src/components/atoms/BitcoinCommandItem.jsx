import Image from "next/image"
import { CommandItem } from "../ui/command"
import { useSearchParamsHook } from "@/hooks/useCustomParams";

import { formatMoney } from "@/lib/helper";
import { DialogClose,DialogTitle } from "../ui/dialog";


function BitcoinCommandItem({ele}) {
const {name,image,current_price,ath_change_percentage,symbol} = ele

    const {setParam} = useSearchParamsHook();
      function hanldeSelect(item) {
        setParam("symbol", item);
      }


  return (
    <DialogClose className=" w-full">

{/* <DialogTitle></DialogTitle> */}
    <CommandItem onSelect={() => hanldeSelect(symbol)} className={"flex justify-between gap-5 "}>
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
    </DialogClose>

  )
}
export default BitcoinCommandItem