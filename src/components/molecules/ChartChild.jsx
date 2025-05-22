
import { TabsContent } from "../ui/tabs"
import ChartCandle from "./ChartCandle"



function ChartChild() {
  
  return (
    <TabsContent value="charts" className="">
      <div>

     <ChartCandle />
      </div>
      </TabsContent>
  )
}
export default ChartChild