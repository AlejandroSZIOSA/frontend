import React from "react";

export default function PrimaryBtn({
  children,
  onClickFn,
  bgColor = "yellow", //Default Props
  opacity = "max", //Default Props
  disabled = false, //Default Props
}) {
  const colorVariants = {
    black: "bg-black",
    yellow: "bg-yellow-700",
  };
  const opacityVariants = {
    max: "opacity-100",
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
