import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/filterByCategory/:category" element={<FilterByCategoryPage></FilterByCategoryPage>}/> */}
        <Route path="*" element={<h2> Page not found</h2>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
