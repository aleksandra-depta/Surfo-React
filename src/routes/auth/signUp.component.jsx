import { useState } from "react";
import { useSelector } from "react-redux";
import { useSignUpMutation } from "../../services/toursApi";

import LoggedIn from "./loggedIn.component";

import { LinkPrimary, TextSmall } from "../../styled/typography";
import { IconForm } from "../../styled/icons";
import { InputFrom } from "../../styled/inputs";
import { ButtonSecondary } from "../../styled/buttons";
import {
  Content,
  Form,
  LinkActive,
  LinkInactive,
  Links,
  Row,
} from "./auth.styles";

const SignUpPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [signUp, { isLoading }] = useSignUpMutation();

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
            <LinkInactive to="/login">Log In </LinkInactive>
            <LinkActive to="/signup">Sign Up</LinkActive>
          </Links>
          <Form>
            <Row>
              <IconForm>
                <ion-icon size="large" name="person-outline"></ion-icon>
              </IconForm>
              <InputFrom
                type="text"
                onChange={handleChange}
                name="name"
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
                onChange={handleChange}
                name="email"
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
                onChange={handleChange}
                name="password"
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
                onChange={handleChange}
                name="passwordConfirm"
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
            <ButtonSecondary
              type="submit"
              onClick={async () => {
                try {
                  await signUp(formState).unwrap();
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Sign up
            </ButtonSecondary>
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
