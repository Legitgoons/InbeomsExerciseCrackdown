import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import StartPage from "./pages/Main/StartPage";
import MainPage from "./pages/Main/MainPage";
import NotFound from "./pages/NotFoundPage";
import FriendsPage from "./pages/Main/FriendsPage";
import CalendarPage from "./pages/Calendar/CalendarPage";
import WorksoutPage from "./pages/Worksout/WorksoutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/worksout" element={<WorksoutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
