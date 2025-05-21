import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const {users, isLoading, error} = useSelector((state)=> state.listUser);
  console.log(users);
  console.log(isLoading);
  console.log(error);


  // Check Error
  if(isLoading) return <p>Loading....</p>
  if(error) return <p>Page Error: {error}</p>
  
  return (
    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
      <div>Day la User</div>
    </main>
  );
};

export default User;
