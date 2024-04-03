"use client";
import React, { useRef, useState } from "react";

//Create async function :)
async function createUser(id, username, password) {
  fetch("http://localhost:4000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
      return "error"; //return error
    });
}

export default function CreateUser() {
  const idInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const [isUserCreated, setIsUserCreated] = useState(false);

  //Another async function :)
  async function submitNewUser() {
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredId = parseInt(idInputRef.current.value);

    //Using try catch :)
    try {
      const res = await createUser(enteredId, enteredUsername, enteredPassword);
      if (res == "error") {
        setIsUserCreated(false);
      } else setIsUserCreated(true);
    } catch (error) {
      console.log(error);
    }
  }

  function render() {
    if (!isUserCreated) {
      return (
        <>
          <div>
            <label for="id">Id</label>
            <br></br>
            <input type="number" id="id" name="Id" required ref={idInputRef} />
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
