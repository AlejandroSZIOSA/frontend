"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function loginUser() {
  const [isAuth, setIsAuth] = useState(false); //Token
  const [userData, setUserData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const router = useRouter();

  useEffect(() => {
    getToken();
  }, [userData]);

  async function getToken() {
    fetch("http://16.170.15.0:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => setIsAuth(data))
      .catch((error) => {
        setIsAuth(false);
        /* console.error("Error:", error); */
      });
  }
  function showAccountPage() {
    /* const token = isAuth; */
    router.push(`/account/${isAuth}`);
  }

  function handleLogin() {
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredPassword != "" && enteredUsername != "") {
      setUserData({ username: enteredUsername, password: enteredPassword });
    } else {
      setErrorMessage("Error: Inputs");
    }
  }

  function render() {
    if (!isAuth) {
      return (
        <>
          <h1 className="pb-8">Login User</h1>
          <div>
            <label>Username</label>
            <br></br>
            <input type="text" ref={usernameInputRef} />
            <br></br>
          </div>
          <div>
            <label>Password</label>
            <br></br>
            <input type="text" ref={passwordInputRef} />
            <br></br>
          </div>
          <div className="p-5">
            <button
              className="flex w-28 h-10 bg-[#A79277] text-[#FFF2E1] items-center justify-center rounded-md"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <p>{errorMessage}</p>
        </>
      );
    } else showAccountPage();
  }

  return (
    <div className="flex flex-col items-center pt-10 text-lg">{render()}</div>
  );
}
