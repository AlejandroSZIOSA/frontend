"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import PrimaryBtn from "../components/PrimaryBtn";
import CONSTANTS from "../utils/constants";

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
    fetch(`${CONSTANTS.API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => setIsAuth(data))
      .catch((error) => {
        setIsAuth(false);
        /*console.error("Error:", error); */
      });
  }
  function showAccountPage() {
    /* const token = isAuth; */
    router.push(`/account/${isAuth}`);
  }

  function handleLogin() {
    //NOTE: Test purposes
    //setIsAuth(true);
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
            <PrimaryBtn onClickFn={handleLogin}>Login</PrimaryBtn>
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
