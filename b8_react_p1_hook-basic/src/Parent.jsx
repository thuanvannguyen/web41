import React from "react";
import Childrent from "./Childrent";
import MyStore from "./store";

const Parent = () => {
  const a = "WEB411111";

  return (
    <MyStore.Provider value={a}>
      <Childrent />
    </MyStore.Provider>
  );
};

export default Parent;