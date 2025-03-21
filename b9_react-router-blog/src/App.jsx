import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./page/Home";
import Post from "./page/Post";
import NotFound from "./page/NotFound";
import Layout from "./page/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
