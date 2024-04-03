"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function test({ params }) {
  const token = params.token;
  const [userAccountData, setUserAccountData] = useState({});

  useEffect(() => {
    getUserSaldo(token);
  }, []);

  async function getUserSaldo(token) {
    fetch("http://localhost:4000/me/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    })
      .then((response) => response.json())
      .then((data) => setUserAccountData(data))
      .catch((error) => {
        console.error("Error:", error);
        return "error"; //return error
      });
  }

  function handleNewSaldo() {}

  return (
    <div className="flex flex-col m-3 gap-4">
      <div>Current Token: {token}</div>
      <div>Current user Id: {userAccountData.userId}</div>
      <div>
        <h2>Current Saldo: $ {userAccountData.amount}</h2>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <h2>
          In money:
          <input type="number" />
        </h2>
        <button className="w-36 h-10 bg-slate-400">Save</button>
      </div>
      <div></div>
    </div>
  );
}
