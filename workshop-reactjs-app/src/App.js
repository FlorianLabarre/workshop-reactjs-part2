import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
