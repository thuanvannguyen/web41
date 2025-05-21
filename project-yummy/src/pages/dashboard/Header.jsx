const Header = () => {
  return (
    <header className="navbar sticky-top flex-md-nowrap">
      <div className="col-md-3 col-lg-3 me-0 px-3 fs-6">
        <a className="navbar-brand" href="index.html">
          Dashboad
        </a>
      </div>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <form
        className="custom-form header-form ms-lg-3 ms-md-3 me-lg-auto me-md-auto order-2 order-lg-0 order-md-0"
        action="#"
        method="get"
        role="form"
      >
        <input
          className="form-control"
          name="search"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div className="navbar-nav me-lg-2">
        <div className="nav-item text-nowrap d-flex align-items-center">
          <div className="dropdown ps-3">
            <a
              className="nav-link dropdown-toggle text-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="navbarLightDropdownMenuLink"
            >
              <i className="bi-bell" />
              <span className="position-absolute start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-lg-end notifications-block-wrap bg-white shadow"
              aria-labelledby="navbarLightDropdownMenuLink"
            >
              <small>Notifications</small>
              <li className="notifications-block border-bottom pb-2 mb-2">
                <a
                  className="dropdown-item d-flex  align-items-center"
                  href="#"
                >
                  <div className="notifications-icon-wrap bg-success">
                    <i className="notifications-icon bi-check-circle-fill" />
                  </div>
                  <div>
                    <span>Your account has been created successfuly.</span>
                    <p>12 days ago</p>
                  </div>
                </a>
              </li>
              <li className="notifications-block border-bottom pb-2 mb-2">
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="notifications-icon-wrap bg-info">
                    <i className="notifications-icon bi-folder" />
                  </div>
                  <div>
                    <span>Please check. We have sent a Daily report.</span>
                    <p>10 days ago</p>
                  </div>
                </a>
              </li>
              <li className="notifications-block">
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="notifications-icon-wrap bg-danger">
                    <i className="notifications-icon bi-question-circle" />
                  </div>
                  <div>
                    <span>Account verification failed.</span>
                    <p>1 hour ago</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown ps-1">
            <a
              className="nav-link dropdown-toggle text-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi-three-dots-vertical" />
            </a>
            <div className="dropdown-menu dropdown-menu-social bg-white shadow">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/search.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Google</span>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="/assets/img/social/spotify.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Spotify</span>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/telegram.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Telegram</span>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/snapchat.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Snapchat</span>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/tiktok.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Tiktok</span>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/youtube.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Youtube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown px-3">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="images/medium-shot-happy-man-smiling.jpg"
                className="profile-image img-fluid"
                alt=""
              />
            </a>
            <ul className="dropdown-menu bg-white shadow">
              <li>
                <div className="dropdown-menu-profile-thumb d-flex">
                  <img
                    src="images/medium-shot-happy-man-smiling.jpg"
                    className="profile-image img-fluid me-3"
                    alt=""
                  />
                  <div className="d-flex flex-column">
                    <small>Thomas</small>
                    <a href="#">thomas@site.com</a>
                  </div>
                </div>
              </li>
              <li>
                <a className="dropdown-item" href="profile.html">
                  <i className="bi-house-fill me-2" />
                  Hồ sơ
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="setting.html">
                  <i className="bi-house-fill me-2" />
                  Cài đặt
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="help-center.html">
                  <i className="bi-question-circle me-2" />
                  Help
                </a>
              </li>
              <li className="border-top mt-3 pt-2 mx-4">
                <a className="dropdown-item ms-0 me-0" href="#">
                  <i className="bi-box-arrow-left me-2" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
