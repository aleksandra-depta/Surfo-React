import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../services/toursApi";

import { HeadingH2, TextMedium, TextSmall } from "../../styled/typography";
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
  const { currentUser } = useSelector((store) => store.auth);
  const [openEditUserName, setOpenEditUserName] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
  });
  const [updateUserName, { isSuccess, isLoading, error }] =
    useUpdateUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Row id={1}>
        <RowItem>
          <IconForm>
            <ion-icon size="large" name="person-outline"></ion-icon>
          </IconForm>
          <Column>
            <TitleContainer>
              <TextMedium>User Name</TextMedium>
              {isSuccess && (
                <ButtonSmallWhite>recently updated</ButtonSmallWhite>
              )}
            </TitleContainer>
            <HeadingH2>{currentUser.name}</HeadingH2>
          </Column>
        </RowItem>
        <ButtonEdit
          onClick={() => setOpenEditUserName(!openEditUserName)}
          button={openEditUserName}
        >
          {openEditUserName ? (
            <ion-icon size="large" name="caret-up-outline"></ion-icon>
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
                <ion-icon size="large" name="person-outline"></ion-icon>
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
