
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger,DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import BitcoinDropdownContent from "./BitcoinDropdownContent";

import { Skeleton } from "../ui/skeleton";
import { formatMoney } from "@/lib/helper";

export function BitcoinIcon({data,isPending,price}) {

  
  if (isPending)
    return (
  <div className="flex items-center space-x-4 max-md:justify-center">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-[75px]" />
          <Skeleton className="h-3 w-[75px]" />
        </div>
      </div>
    );

  return (
    <>
      <Dialog>
        <DialogTrigger asChild className="border-0 border-none focus:border-0">
          <div className="flex gap-6 items-center">

          <Button
            variant="outline"
            className={
              "flex items-center bg-[#20252B] text-white border-0 hover:bg-transparent hover:text-white focus:border-0"
            }
          >
            <Image src={data?.image} alt="Bitcoin icon" width={40} height={40} />
            <p className="text-xl">{data?.name.toUpperCase()}</p>
            <ChevronDown />
          </Button>
             {/* {isPending ? (
                    <Skeleton className="h-4 w-[100px]" />
                  ) : ( */}
                    <div className="text-[#00C076]">
                      {formatMoney(price.toString())}
                    </div>
                  {/* )} */}
          </div>

        </DialogTrigger>
        <DialogContent className="w-fit bg-transparent border-0 border-none  shadow-md">
          <DialogTitle></DialogTitle>
          <BitcoinDropdownContent />
        </DialogContent>
      </Dialog>
    </>
  );
}
