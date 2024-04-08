import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { useUpdateUserMutation } from "../../services/toursApi";
import IonIcon from "@reacticons/ionicons";

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
import ErrorMessageInput from "../../components/input/errorMessage.component";
import { ButtonBlack, ButtonSmallWhite } from "../../styled/buttons";

const MyAccountUserName = () => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const [openEditUserName, setOpenEditUserName] = useState<boolean>(false);

  const [formState, setFormState] = useState<{ name: string }>({
    name: "",
  });
  const [updateUserName, { isSuccess, error }] = useUpdateUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Row>
        <RowItem>
          <IconForm>
            <IonIcon size="large" name="person-outline" />
          </IconForm>
          <Column>
            <TitleContainer>
              <TextMedium>User Name</TextMedium>
              {isSuccess && (
                <ButtonSmallWhite to="">recently updated</ButtonSmallWhite>
              )}
            </TitleContainer>
            <HeadingH2>{currentUser?.name}</HeadingH2>
          </Column>
        </RowItem>
        <ButtonEdit
          to=""
          onClick={() => setOpenEditUserName(!openEditUserName)}
          button={openEditUserName}
        >
          {openEditUserName ? (
            <IonIcon size="large" name="caret-up-outline" />
          ) : (
            "Edit"
          )}
        </ButtonEdit>
      </Row>
      <Item>
        {openEditUserName && (
          <FormContainer>
            <Form>
              <RowItem>
                <IconGrey>
                  <IonIcon size="large" name="person-outline" />
                </IconGrey>
                <InputContainer>
                  <Label>
                    New User Name
                    <InputFrom
                      type="text"
                      name="name"
                      onChange={handleChange}
                      placeholder="New User Name"
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
                    await updateUserName(formState).unwrap();
                    setOpenEditUserName(false);
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

export default MyAccountUserName;
