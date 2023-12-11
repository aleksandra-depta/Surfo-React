import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { useLoginMutation } from "../../services/toursApi";
import IonIcon from "@reacticons/ionicons";

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
  const { currentUser } = useAppSelector((store) => store.auth);
  const [infoMessage, setInfoMessage] = useState<boolean>(false);

  const [formState, setFormState] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [login, { error }] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                <IonIcon size="large" name="person-outline" />
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
                <IonIcon size="large" name="lock-closed-outline" />
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
              to=""
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
                <IonIcon size="large" name="mail-outline" />
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
            <ButtonSecondary
              to=""
              type="submit"
              onClick={() => setInfoMessage(true)}
            >
              Send Email
            </ButtonSecondary>
          </Form>
        </>
      )}
    </Content>
  );
};

export default LoginPage;
