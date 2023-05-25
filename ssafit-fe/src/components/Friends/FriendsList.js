import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  Card,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import FriendsWorksoutPlan from "../Worksout/FriendsWorksoutPlan"

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [showWorksoutPlan, setShowWorksoutPlan] = useState(false);
  const userId = useSelector((state) => state.auth.jwt.id); // 사용자 ID를 스토어에서 가져옴

  const handleDelete = async (friendUserId) => {
    const confirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:9999/api-friend/friend/${userId}/${friendUserId}`);
        setFriends((prevFriends) =>
          prevFriends.filter((friend) => friend.id !== friendUserId)
        );
      } catch (error) {
        console.error("Failed to delete friend: ", error);
      }
    }
  };

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9999/api-friend/friendList/${userId}`
        );

        const friendsData = await Promise.all(
          response.data.map(async (friendId) => {
            const friendResponse = await axios.get(
              `http://localhost:9999/api-user/user/${friendId}`
            );
            return {
              id: friendResponse.data.id,
              name: friendResponse.data.name,
            };
          })
        );
        setFriends(friendsData);
      } catch (error) {
        console.error("친구 목록을 가져오는 데 실패했습니다:", error);
      }
    };

    fetchFriends();
  }, [userId]); // 로그인된 사용자의 ID가 변경 -> 리랜더링

  return (
    <div className="flex flex-col items-center">
      <Card className="p-4 w-96">
        <List className="space-y-2">
          {friends.length === 0 ? (
            <Typography as="a" variant="h6" className="mr-2 py-1.5 lg:ml-2">
              등록된 친구가 없습니다.
            </Typography>
          ) : (
            friends.map((friend) => (
              <ListItem
                key={friend.id}
                className="flex items-center justify-between"
              >
                <span onClick={async () => {
                  setSelectedFriendId(friend.id);
                  setShowWorksoutPlan(!showWorksoutPlan);
                  try {
                    const response = await axios.get(
                      `http://localhost:9999/api-user/user/${userId}`
                    );
                    setIsAdmin(response.data.isAdmin === 1);
                  } catch (error) {
                    console.error("Failed to get user information:", error);
                  }
                }}>{friend.name}</span>
                <Button
                  color="red"
                  size="sm"
                  onClick={() => handleDelete(friend.id)}
                >
                  삭제
                </Button>
              </ListItem>
            ))
          )}
        </List>
      </Card>
      {showWorksoutPlan && <FriendsWorksoutPlan friendId={selectedFriendId} isAdmin={isAdmin} />}
    </div>
  );
};

export default FriendsList;
