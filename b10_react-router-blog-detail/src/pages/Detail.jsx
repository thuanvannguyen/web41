import React from "react";
import { useParams } from "react-router";
import { API_URL } from "../untils";
import useGetApi from "../hook/useGetApi";

const Detail = () => {
  const { id } = useParams();
  // console.log("id cua trang detail", id);

  const API_DETAIL = API_URL + "/" + id;

  const { listing } = useGetApi(API_DETAIL);
  console.log(listing);

  // console.log(API_DETAIL);

  return (
    <div>
      <img
        src={listing.image}
        alt=""
        style={{ width: "200", height: "200px" }}
      />
      <h2>{listing.title}</h2>
    </div>
  );
};

export default Detail;
