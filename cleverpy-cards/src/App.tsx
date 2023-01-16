import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      Hello
      <Routes>

        <Route path="*" element={<Home />} />
        

        {/*Para probar */} 

        {/* <Route path="/adminDeleteEpisode/:episodeId" element={<AdminPage></AdminPage>} /> */}

        {/* <Route path="/filterByCategory/:category" element={<FilterByCategoryPage></FilterByCategoryPage>}/> */}
      </Routes>
      
      {/* recordatori de posa Is Private a tot en lo que el redme ho posa */}
      <Footer/>
    </div>
  );
}

export default App;
