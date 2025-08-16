'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 p-4 flex justify-center gap-6">
      <Link
        href="/"
        className={pathname === "/" ? "text-yellow-400" : "text-white"}
      >
        Home
      </Link>
      <Link
        href="/reading-list"
        className={pathname === "/reading-list" ? "text-yellow-400" : "text-white"}
      >
        Reading List
      </Link>
    </nav>
  );
};

export default Navigation;
