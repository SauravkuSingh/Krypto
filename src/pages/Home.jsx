import React from "react";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-16 flex flex-col gap-16 font-sans">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-tight border-black">
          Discover the{" "}
          <span className="underline decoration-[6px] decoration-green-400 underline-offset-8">
            Best Crypto
          </span>
        </h1>
        <p className="text-lg md:text-xl font-bold text-black border-l-4 border-black pl-4 text-left md:text-center md:border-l-0 md:pl-0">
          Track and trade 1000+ cryptocurrencies in real-time with our sleek,
          brutalist market terminal.
        </p>

        <form className="w-full mt-4 flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          <input
            type="text"
            placeholder="Search crypto by name or symbol..."
            className="w-full sm:w-[400px] border-2 border-black bg-white text-black font-bold text-lg py-4 px-6 focus:outline-none placeholder-gray-500 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:translate-y-[2px] focus:translate-x-[2px] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          />
          <button className="border-2 border-black bg-white text-black font-bold text-lg py-4 px-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[6px] active:translate-x-[6px] active:shadow-none transition-all flex items-center justify-center gap-2">
            Search
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </form>
      </div>

      {/* Table Section */}
      <div className="w-full overflow-x-auto pb-8">
        <table className="w-full min-w-[700px] text-left border-collapse border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
          <thead className="bg-black text-white text-sm md:text-base uppercase tracking-widest border-b-2 border-black">
            <tr>
              <th className="py-5 px-6 font-black w-24">Rank</th>
              <th className="py-5 px-6 font-black">Coin</th>
              <th className="py-5 px-6 font-black w-38">Price</th>
              <th className="py-5 px-6 font-black  w-38">24h Change</th>
              <th className="py-5 px-6 font-black w-56 text-right">
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody className="text-black font-bold text-base md:text-lg">
            {/* Dummy Row 1 */}
            <tr className="border-b-2 border-black hover:bg-gray-100 transition-colors cursor-pointer group">
              <td className="py-6 px-6">
                <span className="inline-block bg-black text-white text-sm w-8 h-8 text-center leading-8 border-2 border-black group-hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  1
                </span>
              </td>
              <td className="py-6 px-6">
                <div className="flex items-center gap-3 w-max">
                  <div className="w-10 h-10 bg-orange-400 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-xl">
                    ₿
                  </div>
                  <span className="text-xl">Bitcoin</span>
                  <span className="text-gray-500 text-sm font-bold bg-gray-200 px-2 py-1 border-2 border-black uppercase">
                    BTC
                  </span>
                </div>
              </td>
              <td className="py-6 px-6">$64,230.00</td>
              <td className="py-6 px-6 text-green-600 font-black">+4.25%</td>
              <td className="py-6 px-6 text-right">$1,264,000,000,000</td>
            </tr>

            {/* Dummy Row 2 */}
            <tr className="border-b-2 border-black hover:bg-gray-100 transition-colors cursor-pointer group">
              <td className="py-6 px-6">
                <span className="inline-block bg-black text-white text-sm w-8 h-8 text-center leading-8 border-2 border-black group-hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  2
                </span>
              </td>
              <td className="py-6 px-6">
                <div className="flex items-center gap-3 w-max">
                  <div className="w-10 h-10 bg-gray-800 text-white rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-xl">
                    Ξ
                  </div>
                  <span className="text-xl">Ethereum</span>
                  <span className="text-gray-500 text-sm font-bold bg-gray-200 px-2 py-1 border-2 border-black uppercase">
                    ETH
                  </span>
                </div>
              </td>
              <td className="py-6 px-6">$3,450.20</td>
              <td className="py-6 px-6 text-red-600 font-black">-1.12%</td>
              <td className="py-6 px-6 text-right">$412,500,000,000</td>
            </tr>

            {/* Dummy Row 3 */}
            <tr className="hover:bg-gray-100 transition-colors cursor-pointer group">
              <td className="py-6 px-6">
                <span className="inline-block bg-black text-white text-sm w-8 h-8 text-center leading-8 border-2 border-black group-hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform">
                  3
                </span>
              </td>
              <td className="py-6 px-6">
                <div className="flex items-center gap-3 w-max">
                  <div className="w-10 h-10 bg-green-400 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-xl text-black">
                    S
                  </div>
                  <span className="text-xl">Solana</span>
                  <span className="text-gray-500 text-sm font-bold bg-gray-200 px-2 py-1 border-2 border-black uppercase">
                    SOL
                  </span>
                </div>
              </td>
              <td className="py-6 px-6">$145.80</td>
              <td className="py-6 px-6 text-green-600 font-black">+8.40%</td>
              <td className="py-6 px-6 text-right">$65,100,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
