import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '..//..//redux/actions';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignInForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:9999/api-user/login', data);
      const token = response.data["access-token"];
      
      // 내가 만든 쿠키~
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 30); // 30분간 쿠키 유지
      document.cookie = `token=${token};expires=${expires.toUTCString()};path=/`;
      
      console.log(response.data["access-token"]); 
      dispatch(login(data.id, token)); 
      alert("로그인이 완료되었습니다.");
      navigate('/',  { replace: true}); 
    } catch (error) {
      console.error(error);
      alert("로그인에 실패했습니다.");
    }
  };
  
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        로그인
      </Typography>
      <Typography color="gray" className="mt-3 font-normal">
        아이디와 비밀번호를 입력해주세요
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="아이디"
            {...register("id", { required: true })}
          />
          <Input
            type="password"
            size="lg"
            label="비밀번호"
            {...register("password", { required: true })}
          />
        </div>
        <Button className="mt-6" fullWidth type="submit">
          로그인
        </Button>
      </form>
    </Card>
  );
};

export default SignInForm;
