import {  Route, Routes } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Brands from "./pages/Brands";
import Compare from "./pages/Compare";
import Wishlist from "./pages/Wishlist";
import BookTestDrive from "./pages/BookTestDrive";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {


  return (
    <>


      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/book-test-drive" element={<BookTestDrive />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <Footer/>

    </>
  )
}

export default App
