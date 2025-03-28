import { useEffect, useState } from "react";

const useGetApi = (url) => {
  const [listing, setLising] = useState([]);

  // CALL API
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();

        setLising(result);
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
  }, []);

  return { listing };
};

export default useGetApi;
