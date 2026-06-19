// import { useState } from 'react'

import './App.css'
import UserDetails from './Components/UserDetails';
import UserList from './Components/UserList'
import {BrowserRouter, Route, Routes} from  'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/user/:id' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
