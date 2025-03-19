import React, { useEffect, useState } from "react";

const App = () => {
  const URL_API = "https://fakestoreapi.com/products/1";
  const [data, setData] = useState({});

  useEffect(() => {
    // CALL API C1
    const getApi = async () => {
      try {
        const res = await fetch(URL_API);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    // Thuc thi
    getApi();
  }, []);

  // console.log(data);

  return <h1>{data.title}</h1>;
};

export default App;

// Cach 1 : fetch -> free co san
// Cach 2: axios -> Thu vien (Cai them)
