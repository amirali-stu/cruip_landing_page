import React, { act, useState } from "react";
import SponsorsBox from "./SponsorsBox";
import SponsorsData from "./SponsorsData";
import SponsorsFilterItem from "./SponsorsFilterItem";
import { TbCube3dSphere } from "react-icons/tb";
import { DiCssTricks } from "react-icons/di";
import { GiOpenWound } from "react-icons/gi";
import { LuWind } from "react-icons/lu";
import { FaBalanceScaleRight } from "react-icons/fa";

function Sponsors() {
  const [active, setActive] = useState("View All");

  return (
    <section className="w-full bg-primer px-4 md:py-20 py-10 sm:px-6 flex items-center justify-center ">
      <div className="max-w-[1104px] w-full border-gradient-top space-y-10">
        <div className="flex-center w-full space-y-4 mt-20">
          <h2 className="text-[#C8D3FF] text-4xl md:text-5xl font-semibold text-center">
            Don't take our word for it
          </h2>
          <p className="text-[#8B8FA7] text-xl font-medium text-center max-w-[888px]">
            We provide tech-first solutions that empower decision-makers to
            build healthier and happier workspaces from anywhere in the world.
          </p>
        </div>
        <div className=" hidden lg:flex items-center justify-center">
          <div className="rounded-full bg-[#0E1422] items-center gap-x-3 h-10  inline-flex mx-auto px-2 py-2">
            <SponsorsFilterItem
              icon={TbCube3dSphere}
              text="View All"
              active={active === "View All"}
              onClick={() => setActive("View All")}
            />
            <SponsorsFilterItem
              icon={DiCssTricks}
              text="Web Apps"
              active={active === "Web Apps"}
              onClick={() => setActive("Web Apps")}
            />
            <SponsorsFilterItem
              icon={GiOpenWound}
              text="eCommerce"
              active={active === "eCommerce"}
              onClick={() => setActive("eCommerce")}
            />
            <SponsorsFilterItem
              icon={LuWind}
              text="Entepris"
              active={active === "Entepris"}
              onClick={() => setActive("Entepris")}
            />
            <SponsorsFilterItem
              icon={FaBalanceScaleRight}
              text="Enteprise"
              active={active === "Enteprise"}
              onClick={() => setActive("Enteprise")}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {SponsorsData.map((d) => (
            <SponsorsBox
              key={d.id}
              {...d}
              active={active === "View All" || d.status === active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
