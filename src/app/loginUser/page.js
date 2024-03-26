import React from "react";

export default function loginUser() {
  return (
    <div className="flex flex-col w-[380px] h-[800px] items-center text-lg">
      <form className="p-10">
        <fieldset>
          <legend>Login user</legend>
          <label for="username">Username</label>
          <br></br>

          <input type="text" id="username" name="username" />
          <br></br>

          <label for="pass">Pass</label>
          <br></br>
          <input type="password" id="pass" name="pass" />
          <br></br>

          <input type="submit" />
        </fieldset>
      </form>
    </div>
  );
}
