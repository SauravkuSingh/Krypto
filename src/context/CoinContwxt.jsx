import { createContext, useContext, useState } from "react";
import { useCryptoData } from "../hooks/useCryptoData";

export const CryptoContext = createContext(null)

// 2. Provider — wraps the whole app in main.jsx
export function CryptoProvider({ children }) {

  // Our custom hook does all the fetching
  const { coins, loading, error, lastUpdate, currency, setCurrency } =
    useCryptoData()

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