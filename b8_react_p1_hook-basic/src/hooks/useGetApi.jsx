import { useEffect, useState } from "react";

export const useGetApi = (URL_API) => {
  console.log(URL_API);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false); // Truoc khi call

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

  useEffect(() => {
    getApi();
  }, []);
  
  return { data, loading };
};
