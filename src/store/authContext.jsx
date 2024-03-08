import React, { createContext, useState } from "react";

const USER_INITIALIZER = {
  name: "",
  email: "",
};

const AuthContext = createContext({
  isLoggedIn: false,
  user: USER_INITIALIZER,
  logIn: () => {},
  logOut: () => {},
});

const { Provider, Consumer } = AuthContext;

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(USER_INITIALIZER);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const values = {
    isLoggedIn,
    user,
    logIn: (user) => {
      setUser(user);
      setIsLoggedIn(true);
    },
    logOut: () => {
      setUser(USER_INITIALIZER);
      setIsLoggedIn(true);
    },
  };

  return <Provider value={values}>{children}</Provider>;
};

export default AuthContext;
export { Consumer, AuthContextProvider as Provider };
