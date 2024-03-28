"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function loginUser() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col w-[380px] h-[800px] items-center pt-10 text-lg">
      <h2 className="p-2">Login User</h2>
      <div>
        <label for="username">Username</label>
        <br></br>
        <input type="text" id="username" name="username" />
        <br></br>
      </div>
      <div>
        <label for="pass">Password</label>
        <br></br>
        <input type="password" id="username" />
        <br></br>
      </div>
      <div className="p-5">
        <button className="flex w-28 h-10 bg-red-400 items-center justify-center rounded-md">
          Login
        </button>
      </div>
      {/* works */}
      <button onClick={() => router.push("/account")}>To account </button>
    </div>
  );
}
