import { useState } from "react";
import { useSelector } from "react-redux";
import { useLoginMutation } from "../../services/toursApi";

import LoggedIn from "./loggedIn.component";

import { ButtonSecondary } from "../../styled/buttons";
import { HeadingH3, LinkGrey, TextSmall } from "../../styled/typography";
import { IconForm } from "../../styled/icons";
import { InputFrom } from "../../styled/inputs";
import {
  Content,
  Form,
  LinkActive,
  LinkInactive,
  Links,
  Row,
} from "./auth.styles";

const LoginPage = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const { currentUser } = useSelector((store) => store.auth);

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
          <Form>
            <Row>
              <IconForm>
                <ion-icon size="large" name="person-outline"></ion-icon>
              </IconForm>
              <InputFrom
                type="text"
                name="email"
                onChange={handleChange}
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
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </Row>
            <ButtonSecondary
              type="submit"
              onClick={async () => {
                try {
                  await login(formState).unwrap();
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Log in
            </ButtonSecondary>
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
          <ButtonSecondary>Send Email</ButtonSecondary>
        </>
      )}
    </Content>
  );
};

export default LoginPage;
