import React from "react";
import { Link } from "react-router";
import useGetApi from "../hook/useGetApi";
import { API_URL } from "../untils";

const Listing = () => {
  const { listing } = useGetApi(API_URL);

  if (listing.length <= 0) return <h1>Nodata</h1>;

  return (
    <ul>
      {listing.map((value) => {
        // console.log(value);
        // console.log(index);

        return (
          <li key={value.id}>
            <img
              src={value.image}
              alt={value.title}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Link to={`/detail/${value.id}`}>{value.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Listing;
