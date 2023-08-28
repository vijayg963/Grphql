import logo from "./logo.svg"
// import { Counter } from "./features/counter/Counter"
import "./App.css"
import { Home } from "./pages/home"
import { Route, Routes } from "react-router-dom"
import { Capsules } from "./pages/capsules"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/capsules" element={<Capsules />} />
    </Routes>
  )
}

export default App
