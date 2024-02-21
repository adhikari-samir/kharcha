import logo from "./logo.svg";
import "./App.css";
import Form from "./Component/Login/Form";
import Dashboard from "./Component/Dashboard/Navbar/Navbar";
import Sidebar from "./Component/Dashboard/Sidebar/Sidebar";
import Home from "./Component/Dashboard/Home/Home";
import { Route, Routes } from "react-router-dom";
import Hero from "./Component/Dashboard/Hero/Hero";
import Piechart from "./Component/Piechart/Piechart";
import { UserProvider } from "./Component/Dashboard/Usercontext/Usercontext";
import ProtectedRoute from "./Component/Dashboard/ProtectedRoute/ProtectedRoute";
import Routesconfig from "./Component/Dashboard/SidebarNavigation/Route";

function App() {
  return (
    <>
      {/* <Piechart /> */}

      <UserProvider>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/login" element={<Form />}></Route>
          <Route
            path="/dashboard"
            element={<ProtectedRoute Component={<Home />} />}
          ></Route>
          {Routesconfig.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute
                  Component={route.component}
                  roles={route.role}
                />
              }
            />
          ))}
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
