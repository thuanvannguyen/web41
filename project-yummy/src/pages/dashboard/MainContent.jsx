import React from "react";

const MainContent = () => {
  return (
    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
      <div className="title-group mb-3">
        <h1 className="h2 mb-0">Overview</h1>
        <small className="text-muted">Hello Thomas, welcome back!</small>
      </div>
      <div className="row my-4">
        <div className="col-lg-12 col-12">
          <div className="custom-block bg-white">
            <h5 className="mb-4">History</h5>
            <div id="pie-chart" />
          </div>
        </div>
        <div className="col-lg-12 col-12">
          <div className="custom-block bg-white">
            <div id="chart" />
          </div>
        </div>
      </div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <p className="copyright-text">
                Copyright © Convert React - Design:{" "}
                <a rel="sponsored" href="/" target="_blank">
                  Thuan Nguyen
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default MainContent;
