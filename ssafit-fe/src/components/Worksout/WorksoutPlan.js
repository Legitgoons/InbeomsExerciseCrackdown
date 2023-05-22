import React from "react";
import Calendar from "../Calendar/Calendar";

const WorksoutPlan = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-4/5 flex items-center justify-evenly mt-40">
        <Calendar />
        <h1>여기 운동 등록</h1>
      </div>
    </div>
  );
};

export default WorksoutPlan;
