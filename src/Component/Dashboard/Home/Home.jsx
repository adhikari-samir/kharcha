import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Layout from "../Homelayout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Layout />
    </>
  );
};

export default Home;
