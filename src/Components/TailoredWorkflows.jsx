import React from "react";
import TailoredWorkflowsBox from "./TailoredWorkflowsBox";
import workflow01 from "/images/workflow/workflow-01.png";
import workflow02 from "/images/workflow/workflow-02.png";
import workflow03 from "/images/workflow/workflow-03.png";

function TailoredWorkflows() {
  const workflowData = [
    {
      id: 1,
      image: workflow01,
      title: "Built-in Tools",
      desc: "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    },
    {
      id: 2,
      image: workflow02,
      title: "Scale Instantly",
      desc: "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    },
    {
      id: 1,
      image: workflow03,
      title: "Tailored Flows",
      desc: "Streamline the product development flow with a content platform that's aligned across specs and insights.",
    },
  ];

  return (
    <section className="w-full bg-primer px-4 py-4 pb-10 sm:px-6 flex-center">
      <div className="max-w-[1104px] w-full ">
        <div className="flex-center w-full space-y-4">
          <span
            id="text-effect"
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-200 relative"
          >
            Tailored Workflows
          </span>
          <h2 className="text-[#C8D3FF] text-4xl md:text-5xl font-semibold text-center">
            Map your product journey
          </h2>
          <p className="text-[#8B8FA7] text-xl font-medium text-center max-w-[888px]">
            Simple and elegant interface to start collaborating with your team
            in minutes. It seamlessly integrates with your code and your
            favorite programming languages.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-x-8 mt-20 gap-y-8">
          {workflowData.map((workflow) => (
            <>
              <TailoredWorkflowsBox key={workflow.id} {...workflow} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TailoredWorkflows;
