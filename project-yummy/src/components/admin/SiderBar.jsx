import React from "react";

const SiderBarDashBoard = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-3 d-md-block sidebar collapse"
    >
      <div className="position-sticky py-4 px-3 sidebar-sticky">
        <ul className="nav flex-column h-100">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="index.html"
            >
              <i className="bi-house-fill me-2" />
              Tổng quan
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="wallet.html">
              <i className="bi-house-fill me-2" />
              Ví của Tôi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="profile.html">
              <i className="bi-house-fill me-2" />
              Hồ sơ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="setting.html">
              <i className="bi-house-fill me-2" />
              Cài đặt
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="help-center.html">
              <i className="bi-house-fill me-2" />
              Trung tâm Trợ giúp
            </a>
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

export default SiderBarDashBoard;
