import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../services/toursApi";

import { HeadingH2, TextMedium, TextSmall } from "../../styled/typography";
import { IconForm, IconGrey } from "../../styled/icons";
import { InputFrom } from "../../styled/inputs";
import {
  Button,
  ButtonEdit,
  Column,
  Form,
  Item,
  Row,
  RowItem,
} from "./userProfile.styles";

const MyAccountUserName = () => {
  const { currentUser } = useSelector((store) => store.auth);
  const [openEditUserName, setOpenEditUserName] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
  });
  const [updateUserName, { isLoading }] = useUpdateUserMutation();

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
            <TextMedium>User Name</TextMedium>
            <HeadingH2>{currentUser.name}</HeadingH2>
          </Column>
        </RowItem>
        <ButtonEdit onClick={() => setOpenEditUserName(!openEditUserName)}>
          Edit
        </ButtonEdit>
      </Row>
      <Item>
        {openEditUserName && (
          <Form>
            <RowItem>
              <IconGrey>
                <ion-icon size="large" name="person-outline"></ion-icon>
              </IconGrey>
              <InputFrom
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="New User Name"
                required
              />
            </RowItem>
            <Button
              type="submit"
              onClick={async () => {
                try {
                  await updateUserName(formState).unwrap();
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Update
            </Button>
          </Form>
        )}
      </Item>
    </>
  );
};

export default MyAccountUserName;
