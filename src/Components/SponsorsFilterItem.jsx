import React from "react";

function filterItem({ icon: Icon, text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-x-1 cursor-pointer transition-all duration-300 p-1 px-2 border-transparent rounded-full ${
        active
          ? "border-b border-b-indigo-400 text-white bg-[#131B2B] opacity-100"
          : "text-[#E5E7EB] opacity-65 hover:opacity-90"
      }`}
    >
      <Icon className={`text-xl ${active ? "text-[#615FFF]" : "text-white"}`} />
      <span>{text}</span>
    </div>
  );
}

export default filterItem;
