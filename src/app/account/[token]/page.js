"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

//Create async FN outside the component
async function handleNewSaldo(newAmount) {
  fetch("http://16.170.15.0:4000/me/accounts/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAmount),
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

export default function account({ params }) {
  const token = params.token;
  const [userAccountData, setUserAccountData] = useState({});
  const [isBtnDisabled, setIsBtnDisabled] = useState({
    disabled: false,
    opacity: 100,
  });

  const newSaldoInputRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [isTransactionDone, setIsTransactionDone] = useState(false);

  useEffect(() => {
    getUserSaldo(token);
  }, [isTransactionDone, userAccountData]); //Fix problem

  async function getUserSaldo(token) {
    fetch("http://16.170.15.0:4000/me/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    })
      .then((response) => response.json())
      .then((data) => setUserAccountData(data))
      .catch((e) => {
        //console.error(e);
      });
  }

  //Another async function :)
  async function submitNewSaldo() {
    const enteredNewSaldo = newSaldoInputRef.current.value;

    if (enteredNewSaldo != "") {
      setErrorMessage("");
      const { userId } = userAccountData;
      const userNewAmount = { userId: userId, newAmount: enteredNewSaldo };

      try {
        const res = await handleNewSaldo(userNewAmount);
        if (res == "error") {
          setIsTransactionDone(false);
          setErrorMessage("Error: From the server, try later!");
        } else {
          setIsTransactionDone(true);
          setIsBtnDisabled({ disabled: true, opacity: 50 });
          newSaldoInputRef.current.value = ""; //Clean input field
        }
      } catch (error) {
        //console.log(error);
      }
    } else {
      setErrorMessage("Error: Input");
    }
  }

  return (
    <div className="flex flex-col py-10 items-center">
      <h1 className="pb-8">User Account</h1>
      <div className="flex flex-col gap-4">
        <div>
          <h2>Current Saldo: $ {userAccountData.amount}</h2>
        </div>
        <div className="flex flex-row items-center gap-2">
          <h2>New Saldo $:</h2>
          <input
            type="number"
            ref={newSaldoInputRef}
            className="w-48 md:w-72"
          />
          <div className="hidden md:contents">
            <button
              className="w-36 h-10 bg-black text-[#FFF2E1] rounded-md"
              onClick={submitNewSaldo}
              disabled={isBtnDisabled.disabled}
            >
              Done
            </button>
          </div>
        </div>
        <div className="hidden md:contents">
          {isTransactionDone && <p>Transaction Done!</p>}
          <p className="ml-32">{errorMessage}</p>
        </div>
      </div>
      <div
        className={`flex flex-col md:hidden p-4 gap-4 items-center opacity-${isBtnDisabled.opacity}`}
      >
        <button
          className="w-36 h-10 bg-black text-[#FFF2E1] rounded-md"
          onClick={submitNewSaldo}
          disabled={isBtnDisabled.disabled}
        >
          Done
        </button>
        <div className="contents md:hidden">
          {isTransactionDone && <p>Transaction Done!</p>}
          <p>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}
