import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <div style={{ height: "70vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
