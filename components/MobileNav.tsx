"use client";

import Link from "next/link";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <div className="w-full flex md:hidden">
      <Link
        href={"/"}
        className="border-2 rounded-md border-black divide-x-2 divide-black flex "
      >
        <span className="px-1">senthil</span>
        <span className="px-1">.dev</span>
      </Link>
    </div>
  );
};

export default MobileNav;
