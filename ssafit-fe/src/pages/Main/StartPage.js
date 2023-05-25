import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InBeom from "../../assets/InBeom.png";
import { Spinner } from "@material-tailwind/react";

const StartPage = () => {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("/signIn");
    }, 3000);
  };

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight); // Add this line
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="h-screen">
      <div
        className="h-screen flex justify-center pb-14 bg-right bg-cover"
        style={{ backgroundImage: `url(${InBeom})` }}
      >
        <h1 className="text-5xl font-bold text-sky-400/100">
          인범이의 운동단속 start Page
        </h1>
        <Spinner className="h-12 w-12" />
      </div>
      <div></div>
    </div>
  );
};

export default StartPage;
