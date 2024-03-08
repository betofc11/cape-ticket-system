import { useState } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData] = useState({
    id: 0,
    name: "",
    email: "",
  });

  try {
    setIsAuth(true);
    setData({
      id: 1,
      name: "Luis Fonseca",
      email: "luisfonsecac26@gmail.com",
    });
  } catch (error) {
    console.error(error);
  }

  return [isAuth, data];
};

export default useAuth;
