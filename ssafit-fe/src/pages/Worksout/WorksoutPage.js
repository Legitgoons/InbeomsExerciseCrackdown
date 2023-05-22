import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import WorksoutPlan from "../../components/Worksout/WorksoutPlan";
import WorksoutVideo from "../../components/Worksout/WorksoutVideo";

const WorksoutPage = () => {
  return (
    <div>
      <WorksoutPlan />
      <Routes>
        <Route path="video" element={<WorksoutVideo />} />
      </Routes>
    </div>
  );
};

export default WorksoutPage;
