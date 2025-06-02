import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Routes"
import HomePage from "./components/Home"

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
