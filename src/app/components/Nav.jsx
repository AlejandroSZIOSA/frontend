import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="bg-slate-300 w-full ">
      <ul className="flex flex-row h-20 list-none justify-around items-center text-base m-0">
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/loginUser"> Login</Link>
        </li>
        {/* <li>
          <Link href="/createUser"> Create User</Link>
        </li> */}
        {/* <li>
          <Link href="/account"> Account</Link>
        </li> */}
      </ul>
    </nav>
  );
}
