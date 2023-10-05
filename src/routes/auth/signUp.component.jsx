import { useState, useContext } from "react";

import { UserContext } from "../../contexts/user.context";

import LoggedIn from "./loggedIn.component";

import Cookies from "universal-cookie";
import axios from "axios";

import { LinkPrimary, TextSmall } from "../../styled/typography";
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

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://127.0.0.1:4000/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm,
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
            <LinkInactive to="/login">Log In </LinkInactive>
            <LinkActive to="/signup">Sign Up</LinkActive>
          </Links>
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Row>
              <IconForm>
                <ion-icon size="large" name="person-outline"></ion-icon>
              </IconForm>
              <InputFrom
                type="text"
                onChange={(e) => setName(e.target.value)}
                name="name"
                value={name}
                placeholder="User Name"
                required
              />
            </Row>
            <Row>
              <IconForm>
                <ion-icon size="large" name="mail-outline"></ion-icon>
              </IconForm>
              <InputFrom
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
                placeholder="Email@example.com"
                required
              />
            </Row>
            <Row>
              <IconForm>
                <ion-icon size="large" name="lock-closed-outline"></ion-icon>
              </IconForm>
              <InputFrom
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
                placeholder="Password"
                required
              />
            </Row>
            <Row>
              <IconForm>
                <ion-icon size="large" name="lock-closed-outline"></ion-icon>
              </IconForm>
              <InputFrom
                type="password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                name="confirmPassword"
                value={passwordConfirm}
                placeholder="Confirm Password"
                required
              />
            </Row>
            <Row>
              <input type="checkbox" name="terms" required />
              <TextSmall>
                I've read and agree to
                <LinkPrimary> Terms & Conditions</LinkPrimary>
              </TextSmall>
            </Row>
            <Button type="submit" onClick={(e) => handleSubmit(e)}>
              Sign up
            </Button>
          </Form>
          <TextSmall>
            Already have an account?
            <LinkPrimary to="/login"> Log in!</LinkPrimary>
          </TextSmall>
        </>
      )}
    </Content>
  );
};

export default SignUpPage;
