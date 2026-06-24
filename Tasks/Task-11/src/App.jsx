import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;