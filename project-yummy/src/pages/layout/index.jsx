import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";

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
