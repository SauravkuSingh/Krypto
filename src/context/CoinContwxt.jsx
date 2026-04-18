import { createContext, useContext, useState } from "react";

export const CryptoContext = createContext(null)

// 2. Provider — wraps the whole app in main.jsx
export function CryptoProvider({ children }) {
  const [currency, setCurrency] = useState('usd')

  // Our custom hook does all the fetching
  const { coins, loading, error, lastUpdate } =
    useCryptoData(currency)

  return (
    <CryptoContext.Provider value={{
      coins, loading, error, lastUpdate,
      currency, setCurrency
    }}>
      {children}
    </CryptoContext.Provider>
  )
}

// 3. Convenience hook (cleaner imports)
export function useCrypto() {
  const ctx = useContext(CryptoContext)
  if (!ctx) throw new Error(
    'useCrypto must be used inside CryptoProvider'
  )
  return ctx
} 