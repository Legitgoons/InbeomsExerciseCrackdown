import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

const FriendsAdd = () => {
  const [friendId, setFriendId] = useState("");
  const onChange = ({ target }) => setFriendId(target.value);

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="친구의 아이디를 입력하세요"
        value={friendId}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={friendId ? "blue" : "blue-gray"}
        disabled={!friendId}
        className="!absolute right-1 top-1 rounded"
      >
        친구 추가
      </Button>
    </div>
  );
};

export default FriendsAdd;
