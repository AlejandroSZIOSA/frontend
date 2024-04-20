import React from "react";

export default function PrimaryBtn({
  children,
  onClickFn,
  bgColor = "yellow-700", //TODO:This doesn't work as passing prop?
}) {
  return (
    <button
      className="flex w-36 h-14 bg-yellow-700 text-[#FFF2E1] items-center justify-center rounded-md"
      onClick={onClickFn}
    >
      {children}
    </button>
  );
}
