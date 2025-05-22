"use client"
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import AvatarIcon from "./Avatar";
import { 
  ArrowRightLeft, 
  Wallet, 
  Bitcoin, 
  LineChart, 
  Gem, 
  Banknote,
  Coins,
  Sparkles
} from 'lucide-react';
import { RxDividerVertical } from "react-icons/rx";
import { Separator } from "../ui/separator";
import { useView } from "@/hooks/useView";
// import Link from "next/navigation"

function Navbar() {
  const links = [
    { 
      name: "Exchange", 
      href: "/dashboard/exchange",
      icon: ArrowRightLeft  // Represents trading/swapping
    },
    { 
      name: "Wallets", 
      href: "/dashboard/wallet",
      icon: Wallet  // Direct wallet representation
    },
    { 
      name: "Shaft Hub", 
      href: "/dashboard/shaft",
      icon: Bitcoin  // Assuming it's crypto-related
    },
    { 
      name: "Market", 
      href: "/dashboard/market",
      icon: LineChart  // For price charts/market data
    },
    { 
      name: "NFTs", 
      href: "/dashboard/nfts",
      icon: Gem  // Represents digital collectibles
    },
    { 
      name: "DeFi", 
      href: "/dashboard/defi",
      icon: Banknote  // Represents decentralized finance
    },
    { 
      name: "Tokens", 
      href: "/dashboard/tokens",
      icon: Coins  // For crypto tokens
    },
    { 
      name: "Staking", 
      href: "/dashboard/staking",
      icon: Sparkles  // Represents earning rewards
    }
  ];

  const {isDesktop} = useView()

  const fig = isDesktop ? 120 : 100
  return (
    <div className="w-screen flex items-center justify-around max-md:justify-between py-3 px-5 gap-5 bg-[#1C2127]">

      <div className="relative">
        <Link href="/dashboard">
        <Image src={logo} alt="logo" width={fig} height={fig} />
        </Link>
      </div>
      <Separator orientation="vertical" className={"h-full  bg-foreground"}/>
      <div className="flex-1 max-md:hidden">
        <ul>
          {links.slice(0,3).map((link) => (
            <li key={link.name} className="inline-block mx-4">
              <Link href={link.href} className="text-white hover:text-foreground">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
        <AvatarIcon isView={isDesktop} links={links}/>
    </div>
  );
}
export default Navbar;
