import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../services/toursApi";

import { HeadingH2, TextMedium } from "../../styled/typography";
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

const MyAccountEmail = () => {
  const { currentUser } = useSelector((store) => store.auth);
  const [openEditEmail, setOpenEditEmail] = useState(false);

  const [formState, setFormState] = useState({
    email: "",
  });
  const [updateEmail, { isLoading }] = useUpdateUserMutation();

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
            <TextMedium>Your Email</TextMedium>
            <HeadingH2>{currentUser.email}</HeadingH2>
          </Column>
        </RowItem>
        <ButtonEdit onClick={() => setOpenEditEmail(!openEditEmail)}>
          Edit
        </ButtonEdit>
      </Row>
      <Item>
        {openEditEmail && (
          <Form>
            <RowItem>
              <IconGrey>
                <ion-icon size="large" name="mail-outline"></ion-icon>
              </IconGrey>
              <InputFrom
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Email@example.com"
                required
              />
            </RowItem>
            <Button
              type="submit"
              onClick={async () => {
                try {
                  await updateEmail(formState).unwrap();
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

export default MyAccountEmail;
