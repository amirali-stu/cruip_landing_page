import React from "react";

function Platform() {
  return (
    <section className="w-full bg-primer px-4 sm:px-6 flex items-center justify-center ">
      <div className="max-w-[1104px] w-full bg-linear py-12 flex items-center flex-col gap-y-16 bg-gradient-to-r from-transparent via-gray-800/50">
        <h2 className="text-[#C8D3FF] text-4xl md:text-5xl font-semibold text-center">
          Join the content-first platform
        </h2>
        <div className="mx-auto max-w-xs flex flex-col sm:flex-row sm:max-w-none sm:justify-center gap-x-3 gap-y-4 w-full">
          <button className="text-sm h-[44px] w-[100%] sm:w-[136px] text-[#FEFEFF] font-bold flex-center bg-[#5950FC] rounded-lg border-[0.5px] border-[#313C4E]">
            Start Building
          </button>
          <button className="text-sm h-[44px] w-[100%] sm:w-[136px] text-[#AFB4BD] font-bold flex-center bg-[#1C2635] rounded-lg border-[0.5px] border-[#313C4E]">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Platform;
