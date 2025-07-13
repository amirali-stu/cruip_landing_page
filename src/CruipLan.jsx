import React from "react";
import "./tailwind.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import TailoredWorkflows from "./Components/TailoredWorkflows";
import AdvancedControls from "./Components/AdvancedControls";
import Sponsors from "./Components/Sponsors";
import Platform from "./Components/platform";
import Footer from "./Components/Footer";

function CruipLan() {
  return (
    <>
      <Nav />
      <main className="">
        <Hero />
        <TailoredWorkflows />
        <AdvancedControls />
        <Sponsors />
        <Platform />
      </main>
      <Footer />
    </>
  );
}

export default CruipLan;
