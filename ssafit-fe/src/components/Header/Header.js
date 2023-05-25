import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "..//..//redux/actions";
import InBeom from "../../assets/InBeom.png";

const Header = () => {
  const jwt = useSelector((state) => state.auth.jwt);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth?.jwt?.id); // 로그인된 id 가져옴(로그아웃 상태면 undefined로 가져옴)
  console.log(useSelector((state) => state.auth));

  const logout = () => {
    const confirmed = window.confirm("로그아웃 하시겠습니까?");
    if (confirmed) {
      dispatch(logoutAction());
      // 쿠키 삭제(과거로 설정하면 삭제됨)
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  };

  return (
    <div>
      <Navbar className="h-full md:h-auto mx-auto max-w-screen-xl px-4 py-2 mt-5">
        <div className="flex items-center justify-between text-blue-gray-900">
          <NavLink to="/main" className="flex items-center">
            <Typography
              as="a"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 lg:ml-2"
              style={{ backgroundImage: `url(${InBeom})` }}
            >
              인범이의 운동단속
            </Typography>
          </NavLink>
          <NavLink to="/">
            <img src={InBeom} className="w-28"/>
          </NavLink>
          <div className="lg:flex">
            {jwt ? (
              <div className="flex">
                <Typography
                  as="a"
                  className="mr-2 py-1.5 lg:ml-2"
                >
                  {userId}님
                </Typography>
                <Button
                  variant="text"
                  size="sm"
                  color="blue-gray"
                  onClick={logout}
                >
                  로그아웃
                </Button>
              </div>
            ) : (
              <>
                <NavLink to="/signIn">
                  <Button variant="text" size="sm" color="blue-gray">
                    로그인
                  </Button>
                </NavLink>
                <NavLink to="/signUp">
                  <Button variant="text" size="sm">
                    회원가입
                  </Button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </Navbar>
    </div>
  );
};
export default Header;
