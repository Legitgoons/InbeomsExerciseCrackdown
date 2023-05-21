import React, { Component } from 'react'
import SignInForm from '../../components/Auth/SignInForm';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignInForm />
    </div>
  );
}

export default LoginPage