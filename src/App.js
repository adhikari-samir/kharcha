import logo from "./logo.svg";
import "./App.css";
import Form from "./Component/Login/Form";
import Dashboard from "./Component/Dashboard/Navbar/Navbar";
import Sidebar from "./Component/Dashboard/Sidebar/Sidebar";
import Home from "./Component/Dashboard/Home/Home";
import { Route, Routes } from "react-router-dom";
import Hero from "./Component/Dashboard/Hero/Hero";
import Piechart from "./Component/Piechart/Piechart";

function App() {
  return (
    <>
      <Piechart />
      {/* <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/login" element={<Form />}></Route>
        <Route path="/dashboard" element={<Home />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
