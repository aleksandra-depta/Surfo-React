import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import LoggedIn from "./loggedIn.component";

import axios from "axios";
import Cookies from "universal-cookie";
import { HeadingH3, LinkGrey, TextSmall } from "../../styled/typography";
import { IconForm } from "../../styled/icons";
import { InputFrom } from "../../styled/inputs";
import {
  Button,
  Content,
  Form,
  LinkActive,
  LinkInactive,
  Links,
  Row,
} from "./auth.styles";

const cookies = new Cookies();

const LoginPage = () => {
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
    <Content>
      {currentUser ? (
        <LoggedIn />
      ) : (
        <>
          <Links>
            <LinkActive to="/login">Log In </LinkActive>
            <LinkInactive to="/signup">Sign Up</LinkInactive>
          </Links>
          <HeadingH3>
            New user?
            <LinkGrey to="/signup"> Create an account</LinkGrey>
          </HeadingH3>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Row>
              <IconForm>
                <ion-icon size="large" name="person-outline"></ion-icon>
              </IconForm>
              <InputFrom
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </Row>
            <Row>
              <IconForm>
                <ion-icon size="large" name="lock-closed-outline"></ion-icon>
              </IconForm>
              <InputFrom
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </Row>
            <Button type="submit" onClick={(e) => handleSubmit(e)}>
              Log in
            </Button>
          </Form>
          <TextSmall>
            Forgot your password?
            <LinkGrey to=""> Get it back! </LinkGrey>
          </TextSmall>
          <Row>
            <IconForm>
              <ion-icon size="large" name="mail-outline"></ion-icon>
            </IconForm>
            <InputFrom type="email" placeholder="Email@example.com" required />
          </Row>
          <Button>Send Email</Button>
        </>
      )}
    </Content>
  );
};

export default LoginPage;
