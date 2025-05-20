
// pages/api/binance.js
export default async function handler(req, res) {
    const { symbol = 'BTCUSDT', limit = 20 } = req.query;
  
    try {
      const response = await fetch(
        `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=${limit}`
      );
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch Binance data" });
    }
  }