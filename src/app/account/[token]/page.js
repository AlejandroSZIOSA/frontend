import React from "react";

export default function test({ params }) {
  return (
    <div className="flex flex-col m-3 gap-4">
      <div>Token: {params.token}</div>
      <div>
        <h2> Your Saldo: $</h2>
      </div>
      <div>
        <h2>
          In money:
          <input type="number" />
        </h2>
      </div>
      <div></div>
    </div>
  );
}
