import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/post">Post</Link>
    </>
  )
}

export default Header