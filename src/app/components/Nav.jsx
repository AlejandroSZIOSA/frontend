import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="bg-slate-300 h-8">
      <ul className="flex flex-row list-none justify-between text-lg">
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="#"> Login</Link>
        </li>
        <li>
          <Link href="/createUser"> Create User</Link>
        </li>
      </ul>
    </nav>
  );
}
