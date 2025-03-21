import React from "react";
import { useGetApi } from "./hooks/useGetApi";
import "./styles.css";


const random = () => {
  return Math.floor(Math.random()*20)
}
const Blog = () => {
    const URL_API = "https://fakestoreapi.com/products/1";
    const URL_API_2 = `https://fakestoreapi.com/products/${random()}`;

  const {data: data_1, loading: loading_1} = useGetApi(URL_API);
  const {data: data_2, loading: loading_2} = useGetApi(URL_API_2);

  console.log(data_1);
  console.log(loading_1);

  console.log("data_2", data_2);
  console.log("loading_2", loading_2);

  if (loading_1 == true || loading_2 == true) return <div className="loading">Loading....</div>;
  return (
    <>
      <h1 style={{color: "red"}}>{data_1 && data_1.title}</h1>
      <h1>{data_2 && data_2.title}</h1>
      <h1>{data_1.rating && data_1.rating.rate}</h1>
    </>
  );
};

export default Blog;
