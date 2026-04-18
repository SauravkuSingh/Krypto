import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:id" element={<Coin/>}/>
      </Routes>
    </div>
  )
}

export default App;
