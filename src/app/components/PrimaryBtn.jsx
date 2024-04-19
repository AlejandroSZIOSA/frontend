import React from "react";

export default function PrimaryBtn({
  children,
  onClickFn,
  bgColor = "yellow-700",
}) {
  return (
    <button
      className={`flex w-36 h-14 bg-${bgColor} text-[#FFF2E1] items-center justify-center rounded-md`}
      onClick={onClickFn}
    >
      {children}
    </button>
  );
}
