"use client";
import React, { useRef, useState } from "react";

async function createUser(id, username, password) {
  fetch("http://localhost:4000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id, username: username, password: password }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default function CreateUser() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [id, setId] = useState();

  function submitNewUser() {
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    createUser(id, enteredUsername, enteredPassword);
    setIsUserCreated(true);
  }

  function render() {
    if (!isUserCreated) {
      return (
        <>
          <div>
            <label for="id">Id</label>
            <br></br>
            <input
              type="number"
              id="id"
              name="Id"
              onChange={(e) => setId(e.target.value)}
            />
            <br></br>
          </div>

          <div>
            <label for="username">Username</label>
            <br></br>
            <input type="text" id="username" required ref={usernameInputRef} />
          </div>

          <div>
            <label for="pass">New pass</label>
            <br></br>
            <input type="text" id="pass" required ref={passwordInputRef} />
          </div>

          {/* <div>
        <label for="re-pass">Confirm Pass</label>
        <br></br>
        <input type="password" id="re-pass" />
      </div> */}

          <div className="p-5">
            <button
              className="flex w-28 h-10 bg-red-400 items-center justify-center rounded-md"
              onClick={submitNewUser}
            >
              Create
            </button>
          </div>
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
