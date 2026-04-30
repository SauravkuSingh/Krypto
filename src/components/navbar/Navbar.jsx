import React, { useContext, useState } from 'react';
import { CryptoContext } from '../../context/CoinContwxt';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {currency, setCurrency} = useContext(CryptoContext)

  const currencyHandler=(e)=>{
    switch(e.target.value){
      case "usd":
        setCurrency({name:"usd",symbol:"$"})
        break;
      case "eur":
        setCurrency({name:"eur",symbol:"€"})
        break;
      case "inr":
        setCurrency({name:"inr",symbol:"₹"})
        break;
      default:
        setCurrency({name:"usd",symbol:"$"})  
    }
  }

  return (
    <nav className="w-full bg-white py-6 px-5 md:px-10 lg:px-20 flex items-center justify-between relative">
      {/* Left Box: Logo */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold tracking-tighter text-black flex items-center gap-1">
            <span className="text-green-400 text-3xl px-1">$</span>

            KRYPTO
          </h1>
          <p className="text-xs font-bold tracking-tighter text-black">your favorite crypto tracker</p>
        </div>
      </div>

      {/* Middle Box: Links (Hidden on Mobile) */}
      {/* <div className="hidden md:flex items-center">
        <ul className="flex gap-8 text-black font-semibold text-[15px]">
          <li><a href="#" className="hover:underline decoration-2 underline-offset-4">Home</a></li>
          <li><a href="#" className="hover:underline decoration-2 underline-offset-4">About</a></li>
          <li><a href="#" className="hover:underline decoration-2 underline-offset-4">Pricing</a></li>
          <li><a href="#" className="hover:underline decoration-2 underline-offset-4">Blog</a></li>
        </ul> 
      </div> */}

      {/* Right Box: Dropdown & Button (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-5">
        <select 
          name="currency" 
          id="currency" 
          className="bg-transparent text-black font-medium text-[15px] outline-none cursor-pointer focus:ring-0"
          value={currency.name}
          onChange={currencyHandler}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        
        <button className="border-[2px] border-black bg-white text-black font-bold py-2 px-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all flex items-center gap-2 text-[15px]">
          Signup
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Hamburger */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="border-2 border-black bg-white p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
             ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
             )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-24 left-5 right-5 bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-6 md:hidden z-50">
          <ul className="flex flex-col gap-4 font-bold text-black text-center text-lg">
            <li><a href="#" className="hover:underline decoration-2 underline-offset-4">Home</a></li>
            <li><a href="#" className="hover:underline decoration-2 underline-offset-4">About</a></li>
            <li><a href="#" className="hover:underline decoration-2 underline-offset-4">Contact</a></li>
            <li><a href="#" className="hover:underline decoration-2 underline-offset-4">Login</a></li>
          </ul>
          
          <div className="flex flex-col gap-4 mt-2 pt-6 border-t-2 border-black">
            <select 
              className="border-2 border-black bg-white text-black font-bold py-3 px-4 focus:outline-none cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] w-full text-center appearance-none"
              value={currency.name}
              onChange={currencyHandler}
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>
            <button className="border-2 border-black bg-white text-black font-bold py-3 w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 text-lg">
              Signup
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;