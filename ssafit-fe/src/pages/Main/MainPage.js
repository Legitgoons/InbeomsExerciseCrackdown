import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import CalendarFrame from "../../components/Calendar/CalendarFrame";

const MainPage = () => {
  return (
    <div className="w-screen h-90vh flex justify-center">
      <div className="w-4/5 h-3/4 flex items-center justify-evenly mt-40">
        <div>
          <NavLink to="/calendar" className="mr-4">
            <CalendarFrame />
          </NavLink>
        </div>
        <div className="flex flex-col">
          <NavLink to="/worksout" className="mr-2">
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
