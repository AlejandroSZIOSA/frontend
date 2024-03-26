import React from "react";

export default function CreateUser() {
  return (
    <div className="flex flex-col items-center text-xl">
      <form>
        <fieldset>
          <legend>Create User</legend>
          <label for="username">Username</label>
          <br></br>

          <input type="text" id="username" name="username" />
          <br></br>

          <label for="new-pass">Pass</label>
          <br></br>
          <input type="email" id="new-pass" name="new-pass" />
          <br></br>

          <label for="re-pass">Confirm Pass</label>
          <br></br>
          <input type="email" id="re-pass" name="re-pass" />
          <br></br>
        </fieldset>
      </form>
    </div>
  );
}
