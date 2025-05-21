import React from "react";
import { Link } from "react-router";

const SidebarMenu = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-3 d-md-block sidebar collapse"
    >
      <div className="position-sticky py-4 px-3 sidebar-sticky">
        <ul className="nav flex-column h-100">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/dashboard"
            >
              <i className="bi-house-fill me-2" />
              Tổng quan
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              aria-current="page"
              to="/dashboard/user"
            >
              <i className="bi-house-fill me-2" />
              Quản lý Người dùng
            </Link>
          </li>
          <li className="nav-item border-top mt-auto pt-2">
            <a className="nav-link" href="#">
              <i className="bi-box-arrow-left me-2" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
