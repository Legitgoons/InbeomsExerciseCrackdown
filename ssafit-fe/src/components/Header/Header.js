import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {


  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <h1>네브바에용</h1>
      </nav>
    </div>
  );
};

export default Header;