import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../services/toursApi";
import ErrorMessageInput from "../../components/input/errorMessage.component";

import { HeadingH2, TextMedium } from "../../styled/typography";
import { IconForm, IconGrey } from "../../styled/icons";
import { InputFrom, Label } from "../../styled/inputs";
import {
  Button,
  ButtonEdit,
  Column,
  Form,
  Item,
  Row,
  RowItem,
  TitleContainer,
} from "./userProfile.styles";
import {
  ButtonSecondary,
  ButtonSmallWhite,
} from "../../styled/buttons";

const MyAccountEmail = () => {
  const { currentUser } = useSelector((store) => store.auth);
  const [openEditEmail, setOpenEditEmail] = useState(false);

  const [formState, setFormState] = useState({
    email: "",
  });
  const [updateEmail, { isSuccess, isLoading, error }] =
    useUpdateUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Row>
        <RowItem>
          <IconForm>
            <ion-icon size="large" name="mail-outline"></ion-icon>
          </IconForm>
          <Column>
            <TitleContainer>
              <TextMedium>Your Email</TextMedium>
              {isSuccess && (
                <ButtonSmallWhite>recently updated</ButtonSmallWhite>
              )}
            </TitleContainer>
            <HeadingH2>{currentUser.email}</HeadingH2>
          </Column>
        </RowItem>
        <ButtonEdit
          onClick={() => setOpenEditEmail(!openEditEmail)}
          button={openEditEmail}
        >
          {openEditEmail ? (
            <ion-icon size="large" name="caret-up-outline"></ion-icon>
          ) : (
            "Edit"
          )}
        </ButtonEdit>
      </Row>
      <Item>
        {openEditEmail && (
          <Form>
            <RowItem>
              <IconGrey>
                <ion-icon size="large" name="mail-outline"></ion-icon>
              </IconGrey>
              <div>
                <Label>
                  New Email
                  <InputFrom
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email@example.com"
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
                  await updateEmail(formState).unwrap();
                  setOpenEditEmail(false);
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
    </>
  );
};

export default MyAccountEmail;
