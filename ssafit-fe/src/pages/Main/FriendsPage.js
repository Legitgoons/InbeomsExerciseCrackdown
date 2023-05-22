import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { List, ListItem, Card } from "@material-tailwind/react";
import FriendsList from "../../components/Friends/FriendsList";
import FriendsAdd from "../../components/Friends/FriendsAdd";
import FriendsAlarm from "../../components/Friends/FriendsAlarm";

const FriendsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-96 my-20">
        <List>
          <NavLink to="/friends">
            <ListItem>친구 목록</ListItem>
          </NavLink>
          <NavLink to="/friends/add">
            <ListItem>친구 추가</ListItem>
          </NavLink>
          <NavLink to="/friends/alarm">
            <ListItem>친구 알림</ListItem>
          </NavLink>
        </List>
      </Card>
      <Routes>
        <Route path="" element={<FriendsList />} />
        <Route path="add" element={<FriendsAdd />} />
        <Route path="alarm" element={<FriendsAlarm />} />
      </Routes>
    </div>
  );
};

export default FriendsPage;
