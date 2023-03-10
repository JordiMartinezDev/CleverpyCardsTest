import "./App.css";
import Home from "./pages/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { SideBarMenuItem } from "./types";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import Login from "./pages/Login/Login";

function App() {
  //We can add items to the sideBar easily
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
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2> Page not found</h2>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
