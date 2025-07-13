import React from "react";
import heroPoster from "/images/videos poster/image.webp";
import neonGlow from "/images/lights/neon-glow-hero_section.svg";

function Hero() {
  return (
    <section className="w-full bg-primer px-4 py-20 sm:px-6 flex items-center justify-center">
      <div className="max-w-[1104px] w-full">
        <div className="w-full flex-center relative">
          <h1 className="text-[#C8D3FF] text-4xl md:text-5xl font-semibold text-center mb-5">
            AI-driven tools for product teams
          </h1>
          <p className="text-[#8B8FA7] text-xl font-medium text-center mb-8 max-w-[768px]">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="mx-auto max-w-xs flex flex-col sm:flex-row sm:max-w-none sm:justify-center gap-x-3 gap-y-4 w-full">
            <button className="text-sm h-[44px] w-[100%] sm:w-[136px] text-[#FEFEFF] font-bold flex-center bg-[#5950FC] rounded-lg border-[0.5px] border-[#313C4E]">
              Start Building
            </button>
            <button className="text-sm h-[44px] w-[100%] sm:w-[136px] text-[#AFB4BD] font-bold flex-center bg-[#1C2635] rounded-lg border-[0.5px] border-[#313C4E]">
              Schedule Demo
            </button>
          </div>
        </div>
        <div className="mt-20 overflow-hidden rounded-3xl">
          <img
            src={heroPoster}
            alt="/"
            width={1104}
            height={576}
            className="opacity-50 rounded-3xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
