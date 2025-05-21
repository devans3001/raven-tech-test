
function IntervalSelector({interval,setParam}) {
 
  const handleInterval = (val) => {
    setParam("interval", val);
  };
   
  const intervals = ["1m", "5m", "15m", "1h", "4h", "1d"];
  return (
    <div className="flex space-x-2 text-foreground text-xs p-2 bg-[#20252B] rounded-t-[20px]">
      <button className="px-2 py-1">Time</button>
      {intervals.map((int) => (
        <button
          key={int}
          className={`px-2 py-1 rounded-2xl cursor-pointer ${
            interval === int ? "bg-[#555C63]" : ""
          }`}
          onClick={() => handleInterval(int)}
        >
          {int}
        </button>
      ))}
    </div>
  );
}
export default IntervalSelector;
