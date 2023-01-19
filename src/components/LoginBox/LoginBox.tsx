import React, { useState } from "react";
import "./LoginBox.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
interface LoginForm {
  username: string;
  password: string;
}

export default function LoginBox() {
  const [loginData, setLoginData] = useState<LoginForm>({
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
    e.preventDefault();
    console.log(loginData);
    // SEND FORM
  };
  return (
    // <div className="LoginBox">
    //   <form onSubmit={(e) => handleLoginSubmit(e)}>
    //     <div className="">
    //       <label htmlFor="email" className="form-label">
    //         Email:
    //       </label>
    //       <input
    //         className="input"
    //         type="email"
    //         id="exampleInputEmail1"
    //         name="email"
    //         value={loginData?.username}
    //         onChange={(e) => onChangeUser(e)}
    //         placeholder="Email"
    //         style={{ width: "40%" }}
    //       />
    //     </div>
    //     <div className="">
    //       <label htmlFor="password" className="form-label">
    //         Password:
    //       </label>
    //       <input
    //         className="input"
    //         type="password"
    //         name="password"
    //         value={loginData?.password}
    //         onChange={(e) => onChangePassword(e)}
    //         placeholder="Password"
    //         style={{ width: "40%" }}
    //       />
    //     </div>
    //     <button className="" type="submit">
    //       Login
    //     </button>
    //   </form>
    // </div>
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
