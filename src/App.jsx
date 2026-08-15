import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './Pages/HomePage.jsx'

function App() {

  return (
    <Routes>
      <Route
        index
        element={<HomePage />} />


      <Route
        path="checkout"
        element={<h1>Hello,Mr. Deva</h1>} />
    </Routes>
  )
}

export default App
