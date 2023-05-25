import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import friends from "../../assets/friends.png";
import exercise from "../../assets/exercise.png";

const MainPage = () => {
  return (
    <div className="w-screen h-90vh flex justify-center">
      <div className="w-4/5 h-3/4 flex items-center justify-evenly mt-40">
        <div className="flex flex-col items-center"> 
          <NavLink to="/friends" className="mr-4">
            <img src={friends} className="w-96 h-96" />
          </NavLink>
          <Typography variant="h6" color="blue-gray" className="">
            친구 구경 가기
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <NavLink to="/worksout" >
            <img src={exercise} className="w-96 h-96" />
          </NavLink>
          <Typography variant="h6" color="blue-gray" className="">
            운동 계획 세우기
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
