import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import AvatarIcon from "./Avatar";
import { RxDividerVertical } from "react-icons/rx";
import { Separator } from "../ui/separator";
// import Link from "next/navigation"

function Navbar() {
  const links = [
    { name: "Exchange", href: "/exchange" },
    { name: "Wallets", href: "/wallets" },
    { name: "Shaft Hub", href: "/shaft-hub" },
  ];
  return (
    <div className="w-screen flex items-center justify-around py-3 px-5 gap-5 bg-[#32383F]">

      <div className="relative">
        <Link href="/">
        <Image src={logo} alt="logo" width={120} height={120} />
        </Link>
      </div>
      {/* <RxDividerVertical  className="text-[#A7B1BC] h-[100%]"/> */}
      <Separator orientation="vertical" className={"h-full  bg-blue-500"}/>
      <div className="flex-1">
        <ul>
          {links.map((link) => (
            <li key={link.name} className="inline-block mx-4">
              <Link href={link.href} className="text-white hover:text-gray-900">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
        <AvatarIcon />
    </div>
  );
}
export default Navbar;
