import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux'; 
import { logoutAction } from '..//..//redux/actions';

const Header = () => {
  const jwt = useSelector(state => state.auth.jwt);
  console.log(jwt)
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  }

  return (
    <div>
      <Navbar className="h-full md:h-auto mx-auto max-w-screen-xl px-4 py-2 mt-5">
        <div className="flex items-center justify-between text-blue-gray-900">
          <NavLink to="/main">
            <Typography
              as="a"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 lg:ml-2"
            >
              인범이의 운동단속
            </Typography>
          </NavLink>
          <div className="lg:flex">
            {
              jwt 
              ? (
                <Button variant="text" size="sm" color="blue-gray" onClick={logout}>
                  로그아웃
                </Button>
              )
              : (
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
              )
            }
          </div>
        </div>
      </Navbar>
    </div>
  );
}
export default Header;