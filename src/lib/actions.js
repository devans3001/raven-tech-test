


export async function getCoin(id) {
    let activeUrl;
    if(id === "all"){
        activeUrl =  `${process.env.NEXT_PUBLIC_COINGECKO_URL}?vs_currency=usd&include_tokens=top&per_page=15`
    }
    else{
        activeUrl = `${process.env.NEXT_PUBLIC_COINGECKO_URL}?vs_currency=usd&symbols=${id}`
    }

    try {
        const res = await fetch(activeUrl)
    
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data",error);
      }
}