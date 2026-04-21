import React from 'react';

const coins = [
  { sym: 'BTC', price: '$64,230', chg: '+4.25%', pos: true },
  { sym: 'ETH', price: '$3,450',  chg: '-1.12%', pos: false },
  { sym: 'SOL', price: '$145.80', chg: '+8.40%', pos: true },
  { sym: 'BNB', price: '$590.20', chg: '+1.10%', pos: true },
  { sym: 'XRP', price: '$0.52', chg: '-0.40%', pos: false },
]

// Duplicate the array multiple times to ensure a seamless infinite loop on any screen size
const doubled = [...coins, ...coins, ...coins, ...coins, ...coins, ...coins];

export function Ticker() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-black text-white py-3 border-b-4 border-black select-none shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] relative z-20">
      <div className="inline-flex gap-16 animate-ticker hover:[animation-play-state:paused]">
        {doubled.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-lg font-black font-mono tracking-tight cursor-default">
            <span className="bg-white text-black px-2 py-0.5 text-sm font-bold border-2 border-black shadow-[2px_2px_0px_0px_#fff] uppercase">
              {c.sym}
            </span>
            <span>{c.price}</span>
            <span className={`px-2 py-0.5 text-base border-2 border-black ${c.pos ? 'bg-green-400 text-black shadow-[2px_2px_0px_0px_#16a34a]' : 'bg-red-500 text-white shadow-[2px_2px_0px_0px_#991b1b]'}`}>
              {c.chg}
            </span>
            <span className="mx-2 text-gray-700">|</span>
          </span>
        ))}
      </div>
    </div>
  )
}