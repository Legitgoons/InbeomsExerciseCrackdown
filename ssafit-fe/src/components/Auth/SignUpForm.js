import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignUpForm = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate(); //useNavigate 가져옴

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const requestData = { ...data, isAdmin: isAdmin ? 1 : 0 };
      await axios.post("http://localhost:9999/api-user/register", requestData);
      alert("회원가입이 완료되었습니다.");
      navigate("/signin");
    } catch (error) {
      console.log(error);
      alert("회원가입에 실패했습니다.");
    } finally {
      console.log({ ...data, isAdmin: isAdmin ? 1 : 0 });
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAdmin(e.target.checked);
  };

  return (
    <div>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          회원가입
        </Typography>
        <Typography color="gray" className="mt-3 font-normal">
          아래의 정보를 입력해주세요
        </Typography>
        {errors.name && <small role="alert">{errors.name.message}</small>}
        {errors.id && <small role="alert">{errors.id.message}</small>}
        {errors.password && (<small role="alert">{errors.password.message}</small>
        )}
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              id="name"
              size="lg"
              label="이름"
              aria-invalid={
                !isDirty ? undefined : errors.name ? "true" : "false"
              }
              {...register("name", {
                required: "이름을 입력해주세요.",
                minLength: {
                  value: 2,
                  message: "이름을 제대로 입력했는지 확인해주세요.",
                },
                maxLength: {
                  value: 10,
                  message: "이름을 제대로 입력했는지 확인해주세요.",
                },
              })}
            />
            <Input
              id="id"
              size="lg"
              label="아이디"
              aria-invalid={!isDirty ? undefined : errors.id ? "true" : "false"}
              {...register("id", {
                required: "아이디를 입력해주세요.",
                minLength: {
                  value: 6,
                  message: "6자리 이상의 아이디를 사용해주세요.",
                },
              })}
            />
            <Input
              type="password"
              size="lg"
              label="비밀번호"
              aria-invalid={
                !isDirty ? undefined : errors.password ? "true" : "false"
              }
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "8자리 이상의 비밀번호를 사용하세요.",
                },
              })}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                혹시 당신은 김인범...?
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            checked={isAdmin}
            onChange={handleCheckboxChange}
          />
          <Button
            className="mt-6"
            fullWidth
            type="submit"
            disabled={isSubmitting}
          >
            회원가입
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignUpForm;
