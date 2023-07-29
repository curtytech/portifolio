import './App.css'

import { Home } from './pages/Home'
import { PoliticaProjectOne } from './pages/PoliticaProjectOne'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PoliticaProjectOne' element={<PoliticaProjectOne />} />
      </Routes>
    </Router>
  )

}

export default App
