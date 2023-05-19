import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InBeom from "../../assets/InBeom.png";

const StartPage = () => {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/main");
    }, 2000);
  };
  useEffect(() => {
    timeout();
    return () => { 
      clearTimeout(timeout);
    };
  });
  return (
    <div>
      <h1 className="text-5xl font-bold text-sky-400/100">인범이의 운동단속 start Page</h1>
      <img src={InBeom}></img>
    </div>
  );
};

export default StartPage;
