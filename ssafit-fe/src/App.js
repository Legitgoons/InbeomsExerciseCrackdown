import React from "react";
import {Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import StartPage from "./pages/Auth/StartPage";
import MainPage from "./pages/Main/MainPage";
import NotFound from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
