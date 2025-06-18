import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from "./pages/Homes";
import Completed from "./pages/Completed";

export default function App() {
  return (
    <div className="w-full h-[98vh] border-[3px] border-[#F4C123] rounded-2xl bg-[#FFFFFC]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes/>}/>
          <Route path="/todo" element={<h1>to-do-list</h1>}/>
          <Route path="/completed" element={<Completed/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
