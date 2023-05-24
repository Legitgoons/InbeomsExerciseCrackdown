import React, { useState } from "react";
import { List, ListItem, Card, Button } from "@material-tailwind/react";

const FriendsAlarm = () => {
  const [friend, setFriend] = useState([
    {
      id: "dd",
      name: '이의찬',
      type: 1, // 친구 신청 알림
    },
    {
      id: "2",
      name: '이경호',
      type: 2, // 운동 계획 등록 알림
    },
  ]);

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
          <Button className="mr-2" color="green" size="sm">
            수락
          </Button>
          <Button color="red" size="sm">
            거절
          </Button>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="p-4 w-192">
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
