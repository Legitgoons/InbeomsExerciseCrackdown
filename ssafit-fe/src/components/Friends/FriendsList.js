import React, { useState } from "react";
import { List, ListItem, Card } from "@material-tailwind/react";

const FriendsList = () => {
  const [friends, setFriends] = useState([
    {
      id: "dd",
      name: '이의찬',
    },
    {
      id: "2",
      name: '이경호',
    },
  ]);

  const handleDelete = (id) => {
    const confirmed = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmed) {
      setFriends((prevFriends) => prevFriends.filter((friend) => friend.id !== id));
    }
  };

  return (
    <Card className="p-4 w-96">
      <List className="space-y-2">
        {friends.map((friend) => (
          <ListItem key={friend.id} className="flex items-center justify-between">
            <span>{friend.name}</span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              onClick={() => handleDelete(friend.id)}
            >
              삭제
            </button>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default FriendsList;
