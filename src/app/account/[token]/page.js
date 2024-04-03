"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

//Create async FN outside the component
async function setNewSaldo(token, newSaldo) {
  fetch("http://localhost:4000/me/accounts/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: token,
      newAmount: newSaldo,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
      return "error"; //return error
    });
}

export default function test({ params }) {
  const token = params.token;
  const [userAccountData, setUserAccountData] = useState({});

  const [isTransactionCompleted, setIsTransactionDone] = useState(false);
  const newSaldoInputRef = useRef();

  useEffect(() => {
    getUserSaldo(token);
  }, [isTransactionCompleted]); //Dependency Fix the problem!

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

  //Another async function :)
  async function submitNewSaldo() {
    const enteredNewSaldo = newSaldoInputRef.current.value;

    try {
      const res = setNewSaldo(token, enteredNewSaldo);
      if (res == "error") {
        setIsTransactionDone(false);
      } else setIsTransactionDone(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col m-3 gap-4">
      <div>Current Token: {token}</div>
      <div>Current user Id: {userAccountData.userId}</div>
      <div>
        <h2>Current Saldo: $ {userAccountData.amount}</h2>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <h2>
          New Saldo $:
          <input type="number" required ref={newSaldoInputRef} />
        </h2>
        <button className="w-36 h-10 bg-slate-400" onClick={submitNewSaldo}>
          Done
        </button>
        {isTransactionCompleted && <p>Transaction Completed</p>}
        <p></p>
      </div>
      <div></div>
    </div>
  );
}
