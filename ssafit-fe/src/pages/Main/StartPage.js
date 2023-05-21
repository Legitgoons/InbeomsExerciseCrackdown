import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InBeom from "../../assets/InBeom.png";
import { Spinner } from "@material-tailwind/react";

const StartPage = () => {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/main");
    }, 5000);
  };
  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <div>
      <div className="h-screen flex pb-14 bg-right bg-cover" style={{backgroundImage: `url(${InBeom})`, }}>
        <h1 className="text-5xl font-bold text-sky-400/100">인범이의 운동단속 start Page</h1>
        <Spinner className="h-12 w-12" />
      </div>
    </div>
  );
};

export default StartPage;
