"use client";
import React, { useRef, useState } from "react";

//Create async function :)
async function createUser(username, password) {
  fetch("http://16.170.15.0:4000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      //console.error("Error:", error);
      return "error"; //return error
    });
}

export default function CreateUser() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const [errorMessage, setErrorMessage] = useState("");
  const [isUserCreated, setIsUserCreated] = useState(false);

  //Another async function :)
  async function submitNewUser() {
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredPassword != "" && enteredUsername != "") {
      //Using try catch :)
      try {
        const res = await createUser(enteredUsername, enteredPassword);
        if (res == "error") {
          setIsUserCreated(false);
        } else {
          setIsUserCreated(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessage("Error: Inputs");
      setIsUserCreated(false);
    }
  }

  function render() {
    if (!isUserCreated) {
      return (
        <>
          <h1 className="pb-8">Create User</h1>
          <div>
            <label>Username</label>
            <br></br>
            <input type="text" ref={usernameInputRef} />
          </div>
          <div>
            <label>Password</label>
            <br></br>
            <input type="text" ref={passwordInputRef} />
          </div>

          <div className="p-5">
            <button
              className="flex w-28 h-10 bg-[#A79277] text-[#FFF2E1] items-center justify-center rounded-md"
              onClick={submitNewUser}
            >
              Create
            </button>
          </div>
          <p>{errorMessage}</p>
        </>
      );
    } else return <h1>User Created!</h1>;
  }

  return (
    <div className="flex flex-col items-center pt-10 text-lg">{render()}</div>
  );
}
