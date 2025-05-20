import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
};

export default Header;