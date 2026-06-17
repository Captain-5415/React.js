import { useState } from 'react'
import { createContext } from 'react'
import './App.css'
import Component1 from './Context/Component1';

// eslint-disable-next-line react-refresh/only-export-components
export const Pass = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  })
  const [submittedData, setSubmittedData] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className={theme}>
      <Pass.Provider value={{ theme, formData, setTheme, handleChange, submittedData, setSubmittedData }}>
        <div className='app'>
          <section>
            <h1>Employee Registration Portal</h1>

          <button className='theme-btn' onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
          </section>

          <Component1 />
        </div>
      </Pass.Provider>
    </div>
  )
}

export default App
