import { useState, useEffect, useCallback } from 'react'

const BASE = 'https://api.coingecko.com/api/v3'

export function useCryptoData() {
  const [coins, setCoins]      = useState([])
  const [loading, setLoading]    = useState(true)
  const [error, setError]      = useState(null)
  const [lastUpdate, setLastUpdate] = useState(null)
  const [currency, setCurrency] = useState({ name: 'usd', symbol: '$' });

  const fetchCoins = useCallback(async () => {
    try {
      let url = `${BASE}/coins/markets`
        + `?vs_currency=${currency.name}`
        + `&order=market_cap_desc&per_page=20`
        + `&price_change_percentage=1h,24h,7d`

      // Add the API key as a query parameter to avoid CORS preflight issues
      const apiKey = import.meta.env.VITE_COIN_GECKO_API;
      if (apiKey) {
        url += `&x_cg_demo_api_key=${apiKey}`;
      }
      
      const res  = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setCoins(data)
      setLastUpdate(new Date())
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [currency.name]) // re-create when currency changes

  useEffect(() => {
    fetchCoins()
    const id = setInterval(fetchCoins, 60_000)
    return () => clearInterval(id) // ← cleanup = no memory leak
  }, [fetchCoins])

  return { coins, loading, error, lastUpdate, refetch: fetchCoins, currency, setCurrency }
}