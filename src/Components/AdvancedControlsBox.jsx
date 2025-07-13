import React from "react";
import { FaArrowRight } from "react-icons/fa";

function AdvancedControlsBox({ icon: Icon, title, desc }) {
  return (
    <div className="space-y-2 max-w-[324px] mx-auto">
      <div>
        <Icon className="text-3xl text-indigo-500" />
      </div>
      <h2 className="text-[#C8D3FF] ">{title}</h2>
      <p className="text-[#8B8FA7]">{desc}</p>
    </div>
  );
}

export default AdvancedControlsBox;
