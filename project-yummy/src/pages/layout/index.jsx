import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export default LayoutPage;
