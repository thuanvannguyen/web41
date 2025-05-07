import React from "react";

const MainContent = () => {
  return (
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
  );
};

export default MainContent;
