import React from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignInForm = () => {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        로그인
      </Typography>
      <Typography color="gray" className="mt-3 font-normal">
        아이디와 비밀번호를 입력해주세요
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="아이디" />
          <Input type="password" size="lg" label="비밀번호" />
        </div>
        <Button className="mt-6" fullWidth>
          로그인
        </Button>
      </form>
    </Card>
  );
};

export default SignInForm;