import React from "react";
import logo from "/images/logo/logo.svg";

function Nav() {
  return (
    <header className="w-full bg-primer px-4 py-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-[1104px] w-full px-4 rounded-2xl border-[0.5px] border-[#313C4E] h-[52px] flex items-center justify-between bg-[#0F1726] relative z-50">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-x-2">
          <button className="text-sm h-[32px] text-[#AFB4BD] font-bold px-2 bg-[#1C2635] rounded-lg border-[0.5px] border-[#313C4E]">
            Sign In
          </button>
          <button className="text-sm h-[32px] text-[#FEFEFF] font-bold px-2 bg-[#5950FC] rounded-lg border-[0.5px] border-[#313C4E]">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
