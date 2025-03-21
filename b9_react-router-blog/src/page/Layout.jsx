import React from "react";
import { Outlet } from "react-router";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;

// tao thanh 1 page dung chung cho ca ung dung cua minh
