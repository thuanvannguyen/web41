import { Outlet } from "react-router";
import Header from "../dashboard/Header";
import SidebarMenu from "../dashboard/SidebarMenu";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SidebarMenu />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
