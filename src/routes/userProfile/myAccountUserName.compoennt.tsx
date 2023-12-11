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
  Item,
  Row,
  RowItem,
  TitleContainer,
} from "./userProfile.styles";
import ErrorMessageInput from "../../components/input/errorMessage.component";
import { ButtonSecondary, ButtonSmallWhite } from "../../styled/buttons";

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
          <Form>
            <RowItem>
              <IconGrey>
                <IonIcon size="large" name="person-outline" />
              </IconGrey>
              <div>
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
              </div>
            </RowItem>
            <ButtonSecondary
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
            </ButtonSecondary>
          </Form>
        )}
      </Item>
    </>
  );
};

export default MyAccountUserName;
