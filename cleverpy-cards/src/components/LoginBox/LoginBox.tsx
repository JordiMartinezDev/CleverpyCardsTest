import React, { useState } from "react";
import "./LoginBox.css";

interface LoginForm {
  username: string;
  password: string;
}

export default function LoginBox() {
  const [loginData, setLoginData] = useState<LoginForm>({
    //we need initial values the way we created onChangeUser and onChangePassword methods
    username: "",
    password: "",
  });

  const onChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      username: e.target.value,
      password: loginData.password,
    });
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      username: loginData.username,
      password: e.target.value,
    });
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //Just avoiding webpage update. Here we should send login info to our Backend
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <div className="loginBox">
      <h3>Login</h3>
      <form onSubmit={(e) => handleLoginSubmit(e)}>
        <div className="form-field">
          <input
            type="email"
            name="email"
            value={loginData?.username}
            onChange={(e) => onChangeUser(e)}
            placeholder="Email"
          />
        </div>

        <div className="form-field">
          <input
            type="password"
            name="password"
            value={loginData?.password}
            onChange={(e) => onChangePassword(e)}
            placeholder="Password"
          />
        </div>

        <div className="form-field">
          <button className="btn" type="submit">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
