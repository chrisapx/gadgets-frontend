
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import DetailsPage from './pages/details/Details'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFoundPage from './pages/notFound/NotFound'
import Listings from './pages/listings/Listings'

function App() {

  return (
    <>
    <div id='app-frame'>
      {/* <Home/> */}
      {/* <DetailsPage/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/la" element={<Listings />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>
    </>
  )
}

export default App
