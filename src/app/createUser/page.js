import React from "react";

export default function CreateUser() {
  return (
    <div className="flex flex-col w-[380px] h-[800px] items-center pt-10 text-lg">
      <h2 className="p-2">Create User</h2>
      <div>
        <label for="username">Username</label>
        <br></br>
        <input type="text" id="username" />
      </div>

      <div>
        <label for="new-pass">New pass</label>
        <br></br>
        <input type="password" id="new-pass" />
      </div>

      <div>
        <label for="re-pass">Confirm Pass</label>
        <br></br>
        <input type="password" id="re-pass" />
      </div>

      <div className="p-5">
        <button className="flex w-28 h-10 bg-red-400 items-center justify-center rounded-md">
          Create
        </button>
      </div>
    </div>
  );
}
