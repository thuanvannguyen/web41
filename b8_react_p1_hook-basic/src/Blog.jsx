import React, { useEffect, useState } from "react";
import "./styles.css"

const Blog = () => {
  const URL_API = "https://fakestoreapi.com/products/1";

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false); // Truoc khi call

  useEffect(() => {
    const getApi = async () => {
      try {
        // Dang call api
        setLoading(true);

        const response = await fetch(URL_API);
        const result = await response.json();
        setData(result); // Call xong tra ve gia tri

        setLoading(false);
      } catch (error) {
        console.log(error); //call loi
        setLoading(false);
      }
    };
    getApi();
  }, []);

  // console.log(data);

  if (loading == true) return <div className="loading">Loading....</div>;

  return <h1>{data.title}</h1>;
};

export default Blog;
