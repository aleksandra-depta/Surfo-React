import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { useUpdateUserMutation } from "../../services/toursApi";
import IonIcon from "@reacticons/ionicons";
import ErrorMessageInput from "../../components/input/errorMessage.component";

import { HeadingH2, TextMedium } from "../../styled/typography";
import { IconForm, IconGrey } from "../../styled/icons";
import { InputFrom, Label } from "../../styled/inputs";
import {
  ButtonEdit,
  Column,
  Form,
  FormContainer,
  InputContainer,
  Item,
  Row,
  RowItem,
  TitleContainer,
} from "./myAccount.styles";
import { ButtonBlack, ButtonSmallWhite } from "../../styled/buttons";

const MyAccountEmail = () => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const [openEditEmail, setOpenEditEmail] = useState<boolean>(false);

  const [formState, setFormState] = useState<{ email: string }>({
    email: "",
  });
  const [updateEmail, { isSuccess, error }] = useUpdateUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Row>
        <RowItem>
          <IconForm>
            <IonIcon size="large" name="mail-outline" />
          </IconForm>
          <Column>
            <TitleContainer>
              <TextMedium>Your Email</TextMedium>
              {isSuccess && (
                <ButtonSmallWhite to="">recently updated</ButtonSmallWhite>
              )}
            </TitleContainer>
            <HeadingH2>{currentUser?.email}</HeadingH2>
          </Column>
        </RowItem>
        <ButtonEdit
          to=""
          onClick={() => setOpenEditEmail(!openEditEmail)}
          button={openEditEmail}
        >
          {openEditEmail ? (
            <IonIcon size="large" name="caret-up-outline" />
          ) : (
            "Edit"
          )}
        </ButtonEdit>
      </Row>
      <Item>
        {openEditEmail && (
          <FormContainer>
            <Form>
              <RowItem>
                <IconGrey>
                  <IonIcon size="large" name="mail-outline" />
                </IconGrey>
                <InputContainer>
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
                </InputContainer>
              </RowItem>
              <ButtonBlack
                to=""
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
              </ButtonBlack>
            </Form>
          </FormContainer>
        )}
      </Item>
    </>
  );
};

export default MyAccountEmail;
