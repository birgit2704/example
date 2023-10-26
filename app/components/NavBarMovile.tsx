import Link from "next/link";
import React from "react";

const NavBarMovile = () => {
  return (
    <div className="flex bg-indigo-400 lg:hidden">
      <ul>
        <Link href="#">Home</Link>
        <Link href="#">Home</Link>
        <Link href="#">Home</Link>
      </ul>
    </div>
  );
};

export default NavBarMovile;
