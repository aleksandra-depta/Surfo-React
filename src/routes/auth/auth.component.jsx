import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import Newsletters from "../../components/newsletter/newsletter.component";

import axios from "axios";
import Cookies from "universal-cookie";

import {
  AuthContainer,

} from "./auth.styles";

const cookies = new Cookies();

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://127.0.0.1:4000/api/v1/users/login",
      data: {
        email,
        password,
      },
    };

    await axios(configuration)
      .then((res) => {
        cookies.set("jwt", res.data.token, {
          path: "/",
        });
      })
      .catch((error) => {
        // error = new Error();
      });

    const token = cookies.get("jwt");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(`http://127.0.0.1:4000/api/v1/users/me`, { headers })
      .then((response) => {
        const currentUser = response.data.data.data;
        setCurrentUser(currentUser);
      })
      .catch((error) => {
        // error = new Error();
      });
  };

  return (
    <AuthContainer>
      <Outlet />
      <Newsletters />
    </AuthContainer>
  );
};

export default AuthPage;
