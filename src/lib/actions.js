export async function getCoin() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_COINGECKO_URL}?vs_currency=usd&include_tokens=top&per_page=15`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data", error);
  }
}

export async function getCoinBySymbol(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_COINGECKO_URL}?vs_currency=usd&symbols=${id}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data", error);
  }
}


export async function fetchOrderBook(symbol) {
  try {
    const res = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=15`);
    if (!res.ok) throw new Error("Failed to fetch order book");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Order book error:", err);
    return null;
  }
}
