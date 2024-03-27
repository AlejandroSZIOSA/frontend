import React from "react";

export default function CreateUser() {
  return (
    <div className="flex flex-col w-[380px] h-[800px] items-center text-lg">
      <form className="p-10" id="formCreateUser">
        <fieldset>
          <legend>Create User</legend>
          <label for="username">Username</label>
          <br></br>

          <input type="text" id="username" name="username" />
          <br></br>

          <label for="new-pass">New pass</label>
          <br></br>
          <input type="password" id="new-pass" name="newpass" />
          <br></br>

          <label for="re-pass">Confirm Pass</label>
          <br></br>
          <input type="password" id="re-pass" name="confirmpass" />
          <br></br>
        </fieldset>
      </form>
      <button
        type="submit"
        form="formCreateUser"
        value="Submit"
        className="flex w-28 h-10 bg-red-400 items-center justify-center rounded-md"
      >
        Submit
      </button>
    </div>
  );
}
