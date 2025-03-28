import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          {/* Dynamic router */}
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;