import "./App.css";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { SideBarMenuItem } from "./types";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { GrCircleInformation } from "react-icons/gr";

function App() {
  const items: SideBarMenuItem[] = [
    {
      id: "1",
      label: "Home",
      icon: AiOutlineHome,
      url: "/",
    },
    {
      id: "2",
      label: "Login",
      icon: BiLogIn,
      url: "/login",
    },
  ];

  return (
    <div className="App">
      <SideBar items={items} />

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
