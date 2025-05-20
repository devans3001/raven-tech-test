import { useGetCoins } from "@/lib/service";
import { createContext, useContext } from "react";



const CoinContext = createContext()

export default function CoinsProvider({children}){

    const {data, isPending} = useGetCoins()

    return (
        <CoinContext.Provider value={{data,isPending}}>
        {children}
        </CoinContext.Provider>
    )
}



export function useCoins(){
    const context = useContext(CoinContext)
    if(!context) throw new Error("useCoins must be used within a CoinsProvider")
    return context
}