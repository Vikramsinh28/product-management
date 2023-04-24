import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ProductAdd from "./pages/ProductAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductAdd/>} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
