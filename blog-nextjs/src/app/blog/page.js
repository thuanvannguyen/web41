"use client"
import { useEffect, useState } from "react"

const Blog = () => {
  const URL_BASE = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await fetch(URL_BASE);
        const result = await res.json(); // Cu phap
        setData(result);
        // console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, [])

  console.log(data);

  return (
    <h1>Home work rending data with array when call getApi</h1>
  )
}

export default Blog