import React from "react";
import { useDashboardCharts } from "../../hooks/useDashboardCharts";
import HeadContent from "./Overview/HeadContent";
import MainContent from "./Overview/MainContent";

const Dashboad = () => {
  useDashboardCharts();
  return (
    <>
      <HeadContent />
      <MainContent />
    </>
  );
};

export default Dashboad;
