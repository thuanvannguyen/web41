import React from "react";
import { Outlet } from "react-router";
import HeaderDashboard from "../../components/admin/Header";
import SiderBarDashBoard from "../../components/admin/SiderBar";
import Footer from "../../components/admin/Footer";

const LayoutDashboard = () => {
  return (
    <>
      <HeaderDashboard />
      <div className="container-fluid">
        <div className="row">
          <SiderBarDashBoard />
          <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
            <Outlet />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default LayoutDashboard;
