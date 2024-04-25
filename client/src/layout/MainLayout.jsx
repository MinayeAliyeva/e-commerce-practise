import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Container from "./Container";
const MainLayout = () => {
  return (
    <>
      <Header />

      <Container>
        {" "}
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};

export default MainLayout;
