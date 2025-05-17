import { useSearchParamsHook } from "@/hooks/useCustomParams";



function BitcoinHeader({activeDisplay,options}) {
   

    const {setParam} = useSearchParamsHook();
 
  return (
    <div className="w-[40%] flex items-center justify-between my-1 text-[#A7B1BC]">
          {options.map((item) => (
            <p
              key={item}
              className={`cursor-pointer px-3 py-1 rounded-[50px] transition-colors duration-200 ${
                activeDisplay === item
                  ? "bg-[#353945] text-white"
                  : "hover:text-white"
              }`}
              onClick={() => setParam("display", item)}
            >
              {item.toUpperCase()}
            </p>
          ))}
        </div>
  )
}
export default BitcoinHeader