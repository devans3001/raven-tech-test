import { ChartColumnIncreasing, Clock12, MoveDown, MoveUp } from "lucide-react";
import { BitcoinIcon } from "../atoms/BitcoinIcon";

function TopInfo() {
  return (
    <div className="topInfo bg-[#20252B] flex items-center px-4 py-3 max-w-[100dvw]">
      <div>
        <BitcoinIcon />
      </div>

      <div className="flex-1 flex items-center justify-around">
        <div className="text-[#00C076]">$20,000</div>

        <div className="flex flex-col gap-1 items-center text-[.7em] font-thin">
          <p className="flex gap-1 text-white items-center ">
            <Clock12 size={12}/>
            <span>24h change</span>
          </p>
          <p className="text-[#00C076]">520.80 +1.25%</p>
        </div>

        <div className="flex flex-col gap-1 items-center text-[.7em] font-thin ">
          <p className="flex gap-1 text-white items-center ">
            <MoveUp size={12}/>
            <span className="text-[#A7B1BC]">24h high</span>
          </p>
          <p className="text-white">520.80 +1.25%</p>
        </div>

        <div className="flex flex-col gap-1 items-center text-[.7em] font-thin ">
          <p className="flex gap-1 text-white items-center ">
            <MoveDown size={12}/>
            <span className="text-[#A7B1BC]">24h low</span>
          </p>
          <p className="text-white">520.80 +1.25%</p>
        </div>
        <div className="flex flex-col gap-1 items-center text-[.7em] font-thin ">
          <p className="flex gap-1 text-white items-center ">
            <ChartColumnIncreasing size={12}/>
            <span className="text-[#A7B1BC]">24h volume</span>
          </p>
          <p className="text-white">75.535.53</p>
        </div>
      </div>
    </div>
  );
}
export default TopInfo;
