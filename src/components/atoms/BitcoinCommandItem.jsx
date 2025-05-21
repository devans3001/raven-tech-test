import Image from "next/image"
import { CommandItem } from "../ui/command"
import { useSearchParamsHook } from "@/hooks/useCustomParams";

import { formatMoney } from "@/lib/helper";
import { DialogClose,DialogTitle } from "../ui/dialog";
import { useView } from "@/hooks/useView";


function BitcoinCommandItem({ele}) {
  const {isDesktop} = useView()
const {name,image,current_price,ath_change_percentage,symbol} = ele

    const {setParam} = useSearchParamsHook();
      function hanldeSelect(item) {
        // setParam("symbol", item);


        setTimeout(() => {
          setParam("symbol", item);
          }, 200); // adjust if needed
      }

      const act = isDesktop ? name : name.split(" ")
      const actual = typeof(act) === "string" ? act : act.length > 1 ? act[1] : act[0]

  return (
    <DialogClose className=" w-full">

    <CommandItem onSelect={() => hanldeSelect(symbol)} className={"flex items-center justify-between gap-5 "}>
    <div className="flex gap-3 py-1">
      <Image src={image} alt="" width={isDesktop ? 30 : 25} height={isDesktop ? 25 : 20} />
      <p>{actual}</p>
    </div>

    <div className="flex-1 md:px-4 flex justify-end">
      {formatMoney(current_price)}
    </div>
    <div className="text-[var(--green)]">
      {`${parseFloat(ath_change_percentage.toFixed(2))}%`}
    </div>
    </CommandItem>
    </DialogClose>

  )
}
export default BitcoinCommandItem