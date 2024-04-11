"use client";
import React, { useRef, useState } from "react";

//Create async function :)
async function createUser(username, password) {
  fetch("http://localhost:4000/users", {
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

    //Using try catch :)
    //TODO:Fix if else!
    try {
      if (enteredPassword != "" && enteredUsername != "") {
        const res = await createUser(enteredUsername, enteredPassword);
        if (res == "error") {
          setIsUserCreated(false);
        } else {
          setIsUserCreated(true);
        }
      } else {
        setErrorMessage("Input Error");
        setIsUserCreated(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function render() {
    if (!isUserCreated) {
      return (
        <>
          <div>
            <label>Username</label>
            <br></br>
            <input type="text" required ref={usernameInputRef} />
          </div>

          <div>
            <label>New pass</label>
            <br></br>
            <input type="text" required ref={passwordInputRef} />
          </div>

          <div className="p-5">
            <button
              className="flex w-28 h-10 bg-red-400 items-center justify-center rounded-md"
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
    <div className="flex flex-col w-[380px] h-[800px] items-center pt-10 text-lg">
      <h2 className="p-2">Create User</h2>
      {render()}
    </div>
  );
}
