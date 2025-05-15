import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Globe, LogOut } from "lucide-react";
import { FaAngleRight } from "react-icons/fa6";

function AvatarIcon() {
  const userName = "Evans Diegbe Emuobnuvie";
  const cdn = userName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="flex items-center justify-end gap-4 ">
      <div className="w-[50%] flex gap-2 items-center justify-around rounded-[5px] bg-[#12171D] text-[#A7B1BC] px-3 py-1">
        <Avatar>
          <AvatarImage
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="users image"
          />
          <AvatarFallback>{cdn}</AvatarFallback>
        </Avatar>

        <p className="truncate text-sm">{userName}</p>
        <FaAngleRight />
      </div>
      <Globe className="text-[#A7B1BC] text-sm" />
      <LogOut className="text-[#A7B1BC]" />
    </div>
  );
}
export default AvatarIcon;
