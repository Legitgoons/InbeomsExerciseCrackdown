import React, { useState } from "react";
import WorksoutPlanExercise from "./WorksoutPlanExercise";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WorkoutPlan = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="w-1/2 flex">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <WorksoutPlanExercise />
    </div>
  );
};

export default WorkoutPlan;
