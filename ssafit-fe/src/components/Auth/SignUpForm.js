import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignUpForm = () => {
  return (
    <div>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          회원가입
        </Typography>
        <Typography color="gray" className="mt-3 font-normal">
          아래의 정보를 입력해주세요
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="이름" />
            <Input size="lg" label="아이디" />
            <Input type="password" size="lg" label="비밀번호" />
          </div>
          <Checkbox
            label={
              (
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  혹시 당신은 김인범...?
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            회원가입
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUpForm;