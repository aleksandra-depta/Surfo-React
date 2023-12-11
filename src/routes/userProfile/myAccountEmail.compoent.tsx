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
  Item,
  Row,
  RowItem,
  TitleContainer,
} from "./userProfile.styles";
import { ButtonSecondary, ButtonSmallWhite } from "../../styled/buttons";

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
          <Form>
            <RowItem>
              <IconGrey>
                <IonIcon size="large" name="mail-outline" />
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
            </ButtonSecondary>
          </Form>
        )}
      </Item>
    </>
  );
};

export default MyAccountEmail;
