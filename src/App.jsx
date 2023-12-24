
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import DetailsPage from './pages/details/Details'
import Home from './pages/home/Home'
import About from './pages/about/About'

function App() {

  return (
    <>
    <div id='app-frame'>
      {/* <Home/> */}
      {/* <DetailsPage/> */}

      <Routes>
          <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<DetailsPage />} />
      </Routes>

    </div>
    </>
  )
}

export default App
