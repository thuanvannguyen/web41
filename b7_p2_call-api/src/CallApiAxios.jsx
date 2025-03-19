import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CallApiAxios = () => {
  const URL_API = "https://fakestoreapi.com/products/1";
  const [show, setShow] = useState({})


  useEffect(()=>{
    // Call api c2
    const getAPI = async() => {
      const res = await axios.get(URL_API);
      const result = res.data;

      setShow(result);

      // console.log("file call api axios: ", result);

    }

    getAPI();

  }, [])

  // console.log(show);

  console.log("React : ", React);


  return (
    <h1>{show.title}</h1>
  )
}

export default CallApiAxios