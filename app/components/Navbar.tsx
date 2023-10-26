import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <ul className="flex bg-orange-300">
        <Link href="#">Home</Link>
        <Link href="#">About us</Link>
        <Link href="#">Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;
