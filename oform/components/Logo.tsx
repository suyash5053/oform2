import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/sign-in"}
      className="font-bold text-4xl bg-[#000000] text-transparent bg-clip-text hover:cursor-pointer"
    >
      Oform
    </Link>
  );
}

export default Logo;