import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { useSignUpMutation } from "../../services/toursApi";
import IonIcon from "@reacticons/ionicons";

import LoggedIn from "./loggedIn.component";
import ErrorMessageInput from "../../components/input/errorMessage.component";

import { LinkPrimary, TextSmall } from "../../styled/typography";
import { IconForm } from "../../styled/icons";
import { InputFrom, InputRow, Label } from "../../styled/inputs";
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
  const { currentUser } = useAppSelector((store) => store.auth);

  type Form = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };

  const [formState, setFormState] = useState<Form>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [signUp, { isSuccess, isLoading, error }] = useSignUpMutation();

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
            <LinkInactive to="/login">Log In </LinkInactive>
            <LinkActive to="/signup">Sign Up</LinkActive>
          </Links>
          <Form>
            <Row>
              <IconForm>
                <IonIcon size="large" name="person-outline" />
              </IconForm>
              <InputRow>
                <Label>
                  User Name
                  <InputFrom
                    type="text"
                    onChange={handleChange}
                    name="name"
                    placeholder="User Name"
                    required
                  />
                </Label>
                {error && <ErrorMessageInput />}
              </InputRow>
            </Row>
            <Row>
              <IconForm>
                <IonIcon size="large" name="mail-outline" />
              </IconForm>
              <InputRow>
                <Label>
                  Email
                  <InputFrom
                    type="email"
                    onChange={handleChange}
                    name="email"
                    placeholder="Email@example.com"
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
                    onChange={handleChange}
                    name="password"
                    placeholder="Password"
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
                  Confirm Password
                  <InputFrom
                    type="password"
                    onChange={handleChange}
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    required
                  />
                </Label>
                {error && <ErrorMessageInput />}
              </InputRow>
            </Row>
            <Row>
              {/* <input type="checkbox" name="terms" required />
              <TextSmall>
                I've read and agree to
                <LinkPrimary> Terms & Conditions</LinkPrimary>
              </TextSmall> */}
            </Row>
            <ButtonSecondary
              to=""
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
