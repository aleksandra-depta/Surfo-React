import { useState } from "react";
import { useUpdatePasswordMutation } from "../../services/toursApi";
import IonIcon from "@reacticons/ionicons";

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
  const [openEditPassword, setOpenEditPassword] = useState<boolean>(false);
  const [openLoginAgain, setOpenLoginAgain] = useState<boolean>(false);

  type TypeForm = {
    passwordCurrent: string;
    password: string;
    passwordConfirm: string;
  };

  const [formState, setFormState] = useState<TypeForm>({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });
  const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Row>
        <RowItem>
          <IconForm>
            <IonIcon size="large" name="lock-closed-outline" />
          </IconForm>
          <Column>
            <TitleContainer>
              <TextMedium>Password</TextMedium>
              {isSuccess && (
                <ButtonSmallWhite to="">recently updated</ButtonSmallWhite>
              )}
            </TitleContainer>
            <HeadingH2>*************</HeadingH2>
          </Column>
        </RowItem>

        <ButtonEdit
          to=""
          onClick={() => setOpenEditPassword(!openEditPassword)}
          button={openEditPassword}
        >
          {openEditPassword ? (
            <IonIcon size="large" name="caret-up-outline" />
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
                <IonIcon size="large" name="lock-closed-outline" />
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
                <IonIcon size="large" name="lock-closed-outline" />
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
                <IonIcon size="large" name="lock-closed-outline" />
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
              to=""
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
