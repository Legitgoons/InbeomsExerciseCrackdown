import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";
import { useSelector } from "react-redux";

const FriendsAdd = () => {
  const [friendId, setFriendId] = useState("");
  const userId = useSelector((state) => state.auth.jwt.id); // userId를 Redux Store에서 가져옴
  const onChange = ({ target }) => setFriendId(target.value);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:9999/api-friend/friend`,
        {
          friendId: 0,
          friendUserId: friendId,
          isAccept: 0,
          userId: userId,
        }
      );
      console.log(response.data);
      alert("친구 신청이 완료되었습니다.");
      setFriendId(""); // 입력값 초기화
    } catch (error) {
      console.error(error);
      alert("친구 신청이 실패하였습니다.");
    }
  };

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
        onClick={handleSubmit} // 버튼 클릭시 요청을 보냄
        className="!absolute right-1 top-1 rounded"
      >
        친구 추가
      </Button>
    </div>
  );
};

export default FriendsAdd;
