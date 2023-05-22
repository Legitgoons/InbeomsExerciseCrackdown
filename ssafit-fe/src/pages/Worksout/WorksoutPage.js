import React from "react";
import { Route, Routes } from "react-router-dom";
import WorksoutPlan from "../../components/Worksout/WorksoutPlan";
import WorksoutVideo from "../../components/Worksout/WorksoutVideo";
import Calendar from "../../components/Calendar/Calendar";

const WorksoutPage = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-4/5 flex items-center justify-evenly mt-40">
        <Calendar />
        <WorksoutPlan />
      </div>
      <Routes>
        <Route path="video" element={<WorksoutVideo />} />
      </Routes>
    </div>
  );
};

export default WorksoutPage;
