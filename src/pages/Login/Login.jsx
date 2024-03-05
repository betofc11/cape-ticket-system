import React, { useContext, useEffect, useState } from "react";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import "./Login.scss";
import logo from "../../assets/images/logo.png";
import AuthContext from "../../store/authContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { logIn, isLoggedIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn(data);
    return <Navigate to="/" />
  };

  const handleChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  useEffect(() => console.log(data), [data]);

  return !isLoggedIn ? (
    <LayoutWrapper>
      <form className="flex flex-1 justify-center" onSubmit={handleSubmit}>
        <section className="login-wrapper">
          <div className="logo-container">
            <img src={logo} alt="Cape Healthcare Logo" id="login-logo" />
          </div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <button type="submit">Log In</button>
        </section>
      </form>
    </LayoutWrapper>
  ) : <Navigate to="/"/>;
};

export default Login;
