import React from "react";

export default function PrimaryBtn({
  children,
  onClickFn,
  bgColor = "yellow", //Default Props values
  opacity = "noOpacity", //Default Props values
  disabled = false, //Default Props values
}) {
  const colorVariants = {
    black: "bg-black",
    yellow: "bg-yellow-700",
  };
  const opacityVariants = {
    noOpacity: "opacity-100",
    half: "opacity-50",
  };

  return (
    <button
      className={`flex w-36 h-14 ${colorVariants[bgColor]} ${opacityVariants[opacity]} text-[#FFF2E1] items-center justify-center rounded-md`}
      onClick={onClickFn}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
