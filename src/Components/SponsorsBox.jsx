import React from "react";

function SponsorsBox({ logo, profile, desc, createBy, sons, active }) {
  return (
    <div
      className={`bg-[#090F1C] p-5 flex justify-between flex-col gap-y-3 rounded-2xl border border-[#1C2635] relative overflow-hidden shadow-inner custom-shadow max-w-[380px] md:max-w-none md:mx-0 mx-auto${
        active ? "translate translate-y-5" : "translate-y-0"
      }`}
    >
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <p className="text-[#7881A1]">"{desc}"</p>
      </div>
      <div className="flex items-center gap-x-2">
        <img
          src={profile}
          alt="profile"
          className="w-9 h-9 rounded-full object-cover"
        />
        <p className="text-[#E0E2E5] font-medium">{createBy}</p>
        <a
          href="#"
          className="text-indigo-200/65 hover:text-indigo-500 duration-300 font-medium"
        >
          - {sons}
        </a>
      </div>
    </div>
  );
}

export default SponsorsBox;
