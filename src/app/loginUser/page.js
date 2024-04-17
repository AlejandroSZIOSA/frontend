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
    fetch(
      "http://ec2-13-60-14-126.eu-north-1.compute.amazonaws.com:4000/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    )
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
      setErrorMessage("Login OK!");
    } else {
      setErrorMessage("Error: Inputs");
    }
  }

  function render() {
    if (!isAuth) {
      return (
        <>
          <h2 className="p-2">Login User</h2>
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
              className="flex w-28 h-10 bg-red-400 items-center justify-center rounded-md"
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
    <div className="flex flex-col w-[380px] h-[800px] items-center pt-10 text-lg">
      {render()}
    </div>
  );
}
