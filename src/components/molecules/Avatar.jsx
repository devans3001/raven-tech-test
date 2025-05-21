"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Globe, LogOut } from "lucide-react";
import { RiMenu2Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { useView } from "@/hooks/useView";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import Link from "next/link";


function AvatarIcon({links}) {
  const [hash, setHash] = useState(null);
  const router = useRouter();
  const { isDesktop } = useView(); // Destructure isDesktop from hook

  const userName = "Evans Diegbe Emuobnuvie";
  const cdn = userName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");

  useEffect(() => {
    const storedHash = localStorage.getItem("user_hash");
    if (storedHash) {
      setHash(storedHash);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_hash");
    router.replace("/auth");
  };

  return (
    <div className="flex items-center justify-end gap-4 max-md:gap-2">
      {/* Conditional wrapper - hides on mobile unless isDesktop */}
      <div
        className={`flex w-[50%] gap-2 items-center justify-around rounded-[5px] ${
          isDesktop ? "bg-[#12171D]" : "bg-transparent"
        } text-[#A7B1BC] px-3 max-md:px-0 py-1`}
      >
        <Avatar>
          <AvatarImage
            src={
              hash
                ? `https://www.gravatar.com/avatar/${hash}?s=200&d=identicon`
                : ""
            }
            alt="user image"
          />
          <AvatarFallback>{cdn}</AvatarFallback>
        </Avatar>

        {isDesktop && (
          <>
            <p className="truncate text-sm">{userName}</p>
            <FaAngleRight />
          </>
        )}
      </div>

      {/* Globe icon - hidden on mobile */}
      <Globe className={` text-[#A7B1BC] text-sm`} />

      {/* Always visible logout icon */}
      <LogOut
        onClick={handleLogout}
        className="text-[#A7B1BC] cursor-pointer max-md:hidden"
      />
    
      <Sheet>
  <SheetTrigger>  <RiMenu2Line className="text-2xl cursor-pointer md:hidden"/></SheetTrigger>
  <SheetContent className={"w-[250px] bg-[var(--first)]"}>
  <div className="mb-8 p-2 bg-[var(--first)]">
              <h1 className="text-2xl font-bold text-foreground">Sisyphus</h1>
            </div>
            <nav className="flex-1">
              <ul className="space-y-2">
                {links.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.name}>
                      <Button
                        asChild
                        variant="ghost"
                        className="w-full justify-start hover:bg-accent"
                        onClick={() => setOpen(false)}
                      >
                        <Link href={link.href} className="flex items-center gap-3">
                          <Icon className="h-4 w-4" />
                          <span>{link.name}</span>
                        </Link>
                      </Button>
                    </li>
                  )
                })}
              </ul>
            </nav>
  </SheetContent>
</Sheet>

    </div>
  );
}

export default AvatarIcon;
