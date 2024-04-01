"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function loginUser() {
  const [isAuth, setIsAuth] = useState(false); //Token
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const router = useRouter();

  useEffect(() => {
    getToken();
  }, [userData]);

  async function getToken() {
    fetch("http://localhost:4000/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => setIsAuth(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function showAccountPage() {
    const token = isAuth;
    router.push(`/account/${token}`);
  }

  function handleLogin() {
    setUserData({ username: username, password: password });
  }

  function render() {
    if (!isAuth) {
      return (
        <>
          <h2 className="p-2">Login User</h2>
          <div>
            <label for="username">Username</label>
            <br></br>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br></br>
          </div>
          <div>
            <label for="pass">Password</label>
            <br></br>
            <input
              type="text"
              id="pass"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
          </div>
          <div className="p-5">
            <button
              className="flex w-28 h-10 bg-red-400 items-center justify-center rounded-md"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </>
      );
    } else showAccountPage();
  }

  return (
    <div className="flex flex-col w-[380px] h-[800px] items-center pt-10 text-lg">
      {render()}
    </div>
  );
}
