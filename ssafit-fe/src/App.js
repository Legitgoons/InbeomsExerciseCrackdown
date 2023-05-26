import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import StartPage from "./pages/Main/StartPage";
import MainPage from "./pages/Main/MainPage";
import NotFound from "./pages/NotFoundPage";
import FriendsPage from "./pages/Main/FriendsPage";
import WorksoutPage from "./pages/Worksout/WorksoutPage";
import Header from "./components/Header/Header";

// 로그인 상태를 확인하는 커스텀 훅
const useAuth = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  return !!jwt;
};

const ProtectedComponent = ({ children }) => {
  const isAuth = useAuth();
  const navigate = useNavigate();

  if (!isAuth) {
    navigate("/signin");
    return null;
  }

  return children;
}

const PublicComponent = ({ children }) => {
  const isAuth = useAuth();
  const navigate = useNavigate();

  if (isAuth) {
    navigate("/main");
    return null;
  }

  return children;
}

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<ProtectedComponent><MainPage /></ProtectedComponent>} />
        <Route path="/signin" element={<PublicComponent><LoginPage /></PublicComponent>} />
        <Route path="/signup" element={<PublicComponent><RegisterPage /></PublicComponent>} />
        <Route path="/friends/*" element={<ProtectedComponent><FriendsPage /></ProtectedComponent>} />
        <Route path="/worksout/*" element={<ProtectedComponent><WorksoutPage /></ProtectedComponent>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;