import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import { logout } from "../../slices/authSlice";

const SidebarMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation(); // Get thong tin URL Browser
  console.log(location.pathname);

  const handleLogout = () => {
    // Xoa toan bo thong tin user localStorage
    localStorage.clear();
    // Xoa thong tin store
    dispatch(logout());
    // Chuyen huong trang chu
    navigate("/");
  };

  const isActive = (path) => {
    return location.pathname === path; // Dung => true, sai => fasle
  };

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-3 d-md-block sidebar collapse"
    >
      <div className="position-sticky py-4 px-3 sidebar-sticky">
        <ul className="nav flex-column h-100">
          <li className="nav-item">
            <Link
              className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
              aria-current="page"
              to="/dashboard"
            >
              <i className="bi-house-fill me-2" />
              Tổng quan
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${
                isActive("/dashboard/user") ? "active " : ""
              }`}
              aria-current="page"
              to="/dashboard/user"
            >
              <i className="bi-house-fill me-2" />
              Quản lý Người dùng
            </Link>
          </li>

          <li className="nav-item border-top mt-auto pt-2">
            <button className="nav-link" onClick={handleLogout}>
              <i className="bi-box-arrow-left me-2" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
