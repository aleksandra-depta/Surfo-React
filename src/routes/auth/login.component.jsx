import { useState } from "react";
import { useSelector } from "react-redux";
import { useLoginMutation } from "../../services/toursApi";

import LoggedIn from "./loggedIn.component";
import ErrorMessageInput from "../../components/input/errorMessage.component";
import InfoMessageInput from "../../components/input/infoMessage.component";

import { ButtonSecondary } from "../../styled/buttons";
import { HeadingH3, LinkGrey, TextSmall } from "../../styled/typography";
import { IconForm } from "../../styled/icons";
import { InputFrom, InputRow, Label } from "../../styled/inputs";
import {
  Content,
  Form,
  LinkActive,
  LinkInactive,
  Links,
  Row,
} from "./auth.styles";

const LoginPage = () => {
  const { currentUser } = useSelector((store) => store.auth);
  const [infoMessage, setInfoMessage] = useState(false);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login, { isSuccess, isLoading, error }] = useLoginMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
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
          <Form>
            <Row>
              <IconForm>
                <ion-icon size="large" name="person-outline"></ion-icon>
              </IconForm>
              <InputRow>
                <Label>
                  Email
                  <InputFrom
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </Label>
                {error && <ErrorMessageInput />}
              </InputRow>
            </Row>
            <Row>
              <IconForm>
                <ion-icon size="large" name="lock-closed-outline"></ion-icon>
              </IconForm>
              <InputRow>
                <Label>
                  Password
                  <InputFrom
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </Label>
                {error && <ErrorMessageInput />}
              </InputRow>
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
          <Form>
            <TextSmall>
              Forgot your password?
              <LinkGrey to=""> Get it back! </LinkGrey>
            </TextSmall>
            <Row>
              <IconForm>
                <ion-icon size="large" name="mail-outline"></ion-icon>
              </IconForm>
              <InputRow>
                <Label>
                  Email
                  <InputFrom
                    type="email"
                    placeholder="Email@example.com"
                    required
                  />
                </Label>
                {infoMessage && <InfoMessageInput />}
              </InputRow>
            </Row>
            <ButtonSecondary type="submit" onClick={() => setInfoMessage(true)}>
              Send Email
            </ButtonSecondary>
          </Form>
        </>
      )}
    </Content>
  );
};

export default LoginPage;
