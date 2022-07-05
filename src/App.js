
import Exercise from "./pages/Exercise";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <div className="">
     
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

