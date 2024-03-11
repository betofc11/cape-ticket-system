import React, { useContext, useState } from "react";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import "./Login.scss";
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
    return <Navigate to="/" />;
  };

  const handleChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  return !isLoggedIn ? (
    <LayoutWrapper>
      <form className="flex flex-1 justify-center" onSubmit={handleSubmit}>
        <section className="login-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <button type="submit" className="flex">
            Login <span className="ml-1 material-symbols-outlined">login</span>
          </button>
        </section>
      </form>
    </LayoutWrapper>
  ) : (
    <Navigate to="/" />
  );
};

export default Login;
