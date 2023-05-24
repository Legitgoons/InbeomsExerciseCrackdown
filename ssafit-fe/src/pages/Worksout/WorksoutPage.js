import React from "react";
import { Route, Routes } from "react-router-dom";
import WorksoutPlan from "../../components/Worksout/WorksoutPlan";
import WorksoutVideo from "../../components/Worksout/WorksoutPlanVideo";

const WorksoutPage = () => {
  return (
    <div className="w-screen flex justify-evenly">
      <div className="w-5/6 flex items-center justify-evenly mt-28">
        <WorksoutPlan />
      </div>
      <Routes>
        <Route path="video" element={<WorksoutVideo />} />
      </Routes>
    </div>
  );
};

export default WorksoutPage;
