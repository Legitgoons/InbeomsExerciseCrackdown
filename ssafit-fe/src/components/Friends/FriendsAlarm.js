import React, { useState, useEffect } from "react";
import { List, ListItem, Card, Button } from "@material-tailwind/react";
import axios from 'axios';
import { useSelector } from 'react-redux';

const FriendsAlarm = () => {
  const [friend, setFriend] = useState([]);
  const userId = useSelector((state) => state.auth.jwt.id);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`http://localhost:9999/api-friend/sendFriend/${userId}`);
        const fetchedFriends = await Promise.all(response.data.map(async friendData => {
          const friendResponse = await axios.get(`http://localhost:9999/api-user/user/${friendData.userId}`);
          return {
            id: friendData.friendId,
            name: friendResponse.data.name,
            type: 1,
          };
        }));
        setFriend(fetchedFriends);
      } catch (error) {
        console.error("Failed to fetch friends: ", error);
      }
    };

    fetchFriends();
  }, [userId]);

  const handleAccept = async (friendId) => {
    try {
      await axios.put(`http://localhost:9999/api-friend/friend/accept/${friendId}`);
      setFriend(friend.filter(f => f.id !== friendId));
      console.log(friendId)
    } catch (error) {
      console.error("Failed to accept friend request: ", error);
    }
  };

  const handleReject = async (friendId) => {
    try {
      await axios.put(`http://localhost:9999/api-friend/friend/reject/${friendId}`);
      setFriend(friend.filter(f => f.id !== friendId));
    } catch (error) {
      console.error("Failed to reject friend request: ", error);
    }
  };

  const renderMessage = (friend) => {
    if (friend.type === 1) {
      return `${friend.name}님이 친구 신청을 보내셨습니다`;
    } else if (friend.type === 2) {
      return `${friend.name}님이 운동 계획을 등록하였습니다`;
    }
    return "";
  };

  const renderActionButtons = (friend) => {
    if (friend.type === 1) {
      return (
        <div>
          <Button className="mr-2" color="green" size="sm" onClick={() => handleAccept(friend.id)}>
            수락
          </Button>
          <Button color="red" size="sm" onClick={() => handleReject(friend.id)}>
            거절
          </Button>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-4 w-96">
      <List className="space-y-2">
        {friend.map((friend) => (
          <ListItem key={friend.id} className="flex flex-col items-center justify-between">
            <span className="mb-2">{renderMessage(friend)}</span>
            {renderActionButtons(friend)}
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default FriendsAlarm;
