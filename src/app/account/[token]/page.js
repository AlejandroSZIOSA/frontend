"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

//Create async FN outside the component
async function handleNewSaldo(newAmount) {
  fetch("http://localhost:4000/me/accounts/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAmount),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return "error"; //return error
    });
}

export default function test({ params }) {
  const token = params.token;
  const [userAccountData, setUserAccountData] = useState({});
  const [isBtnDisabled, setIsBtnDisabled] = useState({
    disabled: false,
    opacity: 100, //PROBLEM
  });

  const [isTransactionCompleted, setIsTransactionDone] = useState(false);
  const newSaldoInputRef = useRef();

  useEffect(() => {
    getUserSaldo(token);
  }, [isTransactionCompleted]);

  async function getUserSaldo(token) {
    fetch("http://localhost:4000/me/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    })
      .then((response) => response.json())
      .then((data) => setUserAccountData(data))
      .catch((e) => {
        console.error(e);
      });
  }

  //Another async function :)
  async function submitNewSaldo() {
    /* console.log("click"); */
    const enteredNewSaldo = newSaldoInputRef.current.value;
    const { userId } = userAccountData;
    const userNewAmount = { userId: userId, newAmount: enteredNewSaldo };

    try {
      const res = await handleNewSaldo(userNewAmount);
      if (res == "error") {
        setIsTransactionDone(false);
        /* setIsBtnDisabled({disabled:false}); */
      } else {
        setIsTransactionDone(true);
        setIsBtnDisabled({ disabled: true, opacity: 95 });
        newSaldoInputRef.current.value = ""; //Clean input field
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col m-3 gap-4">
      <div>
        <h2>Current Saldo: $ {userAccountData.amount}</h2>
      </div>
      <h2>
        New Saldo $:
        <input type="number" required ref={newSaldoInputRef} />
      </h2>
      <div
        className={`flex flex-col gap-3 items-center opacity-${isBtnDisabled.opacity}`}
      >
        <button
          className="w-36 h-10 bg-slate-400"
          onClick={submitNewSaldo}
          disabled={isBtnDisabled.disabled}
        >
          Done
        </button>
        {isTransactionCompleted && <p>Transaction Completed</p>}
      </div>
      <div></div>
    </div>
  );
}
