import { useState } from "react";
import { useUpdatePasswordMutation } from "../../services/toursApi";
import ErrorMessageInput from "../../components/input/errorMessage.component";
import LoginAgain from "../../components/loginAgain/loginAgain.component";

import { ButtonSecondary, ButtonSmallWhite } from "../../styled/buttons";
import { HeadingH2, TextMedium } from "../../styled/typography";
import { IconForm, IconGrey } from "../../styled/icons";
import { InputFrom, Label } from "../../styled/inputs";
import {
  ButtonEdit,
  Column,
  Form,
  Item,
  Row,
  RowItem,
  TitleContainer,
} from "./userProfile.styles";

const MyAccountPassword = () => {
  const [openEditPassword, setOpenEditPassword] = useState(false);
  const [openLoginAgain, setOpenLoginAgain] = useState(false);

  const [formState, setFormState] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });
  const [updatePassword, { isSuccess, isLoading, error }] =
    useUpdatePasswordMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Row>
        <RowItem>
          <IconForm>
            <ion-icon size="large" name="lock-closed-outline"></ion-icon>
          </IconForm>
          <Column>
            <TitleContainer>
              <TextMedium>Password</TextMedium>
              {isSuccess && (
                <ButtonSmallWhite>recently updated</ButtonSmallWhite>
              )}
            </TitleContainer>
            <HeadingH2>*************</HeadingH2>
          </Column>
        </RowItem>

        <ButtonEdit
          onClick={() => setOpenEditPassword(!openEditPassword)}
          button={openEditPassword}
        >
          {openEditPassword ? (
            <ion-icon size="large" name="caret-up-outline"></ion-icon>
          ) : (
            "Edit"
          )}
        </ButtonEdit>
      </Row>
      <Item>
        {openEditPassword && (
          <Form>
            <RowItem>
              <IconGrey>
                <ion-icon size="large" name="lock-closed-outline"></ion-icon>
              </IconGrey>
              <div>
                <Label>
                  Current Password
                  <InputFrom
                    type="password"
                    name="passwordCurrent"
                    onChange={handleChange}
                    placeholder="Current Password"
                    required
                  />
                </Label>
                {error && <ErrorMessageInput />}
              </div>
            </RowItem>
            <RowItem>
              <IconGrey>
                <ion-icon size="large" name="lock-closed-outline"></ion-icon>
              </IconGrey>
              <div>
                <Label>
                  New Password
                  <InputFrom
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="New Password"
                    required
                  />
                </Label>
                {error && <ErrorMessageInput />}
              </div>
            </RowItem>
            <RowItem>
              <IconGrey>
                <ion-icon size="large" name="lock-closed-outline"></ion-icon>
              </IconGrey>
              <div>
                <Label>
                  Confirm New Password
                  <InputFrom
                    type="password"
                    name="passwordConfirm"
                    onChange={handleChange}
                    placeholder="Confirm New Password"
                    required
                  />
                </Label>
                {error && <ErrorMessageInput />}
              </div>
            </RowItem>
            <ButtonSecondary
              type="submit"
              onClick={async () => {
                try {
                  await updatePassword(formState).unwrap();
                  setOpenEditPassword(false);
                  setOpenLoginAgain(true);
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Update
            </ButtonSecondary>
          </Form>
        )}
      </Item>
      {openLoginAgain && <LoginAgain />}
    </>
  );
};

export default MyAccountPassword;
