import { useDashboardCharts } from "../../hooks/useDashboardApexchart";
import MainContent from "./MainContent";

const Dashboad = () => {
  useDashboardCharts();
  return (
    <>
      <MainContent/>
    </>
  );
};

export default Dashboad;