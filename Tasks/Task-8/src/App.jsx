import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css'
import Home from './Router/Home';
import About from './Router/About';
import Services from './Router/Services';
import Contact from './Router/Contact';
import Profile from './Router/Profile';
import WebDev from './Router/Services/WebDev';
import AppDev from './Router/Services/AppDev';
import UIUX from './Router/Services/UIUX';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="layout">
          <div className="header">
            <h2>Gowtham</h2>

            <NavLink to="" className={({ isActive }) => isActive ? "link active-link" : "link"}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "link active-link" : "link"}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "link active-link" : "link"}>
              Services
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "link active-link" : "link"}>
              Contact
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "link active-link" : "link"}>
              Profile
            </NavLink>
          </div>

          <div className="pages">
            <Routes>
              <Route path='' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />}>
                <Route path='website' element={<WebDev />} />
                <Route path='application' element={<AppDev />} />
                <Route path='uiux' element={<UIUX />} />
              </Route>
              <Route path='/contact' element={<Contact />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
