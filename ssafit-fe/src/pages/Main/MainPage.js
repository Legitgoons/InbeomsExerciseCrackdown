import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import DiaryImg from "../../assets/Diary.png";

const MainPage = () => {
  return (
    <div className="w-screen h-90vh flex justify-center">
      <div className="w-3/5 h-3/4 flex items-center justify-evenly mt-40">
        <div>
          <NavLink to="/diary" className="mr-4">
            <img src={DiaryImg} className="w-96 h-96"/>
          </NavLink>
        </div>
        <div className="flex flex-col mr-20">
          <NavLink to="/worksout" >
            <Button variant="filled" size="lg" className="mr-2 mb-40">
              운동하러가기
            </Button>
          </NavLink>
          <NavLink to="/friends">
            <Button variant="filled" size="lg">
              친구보러가기
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
