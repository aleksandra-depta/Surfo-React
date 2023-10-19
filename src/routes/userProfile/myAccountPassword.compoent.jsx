import { useState } from "react";
import { useUpdatePasswordMutation } from "../../services/toursApi";

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

const MyAccountPassword = () => {
  const [openEditPassword, setOpenEditPassword] = useState(false);

  const [formState, setFormState] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

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
            <TextMedium>Password</TextMedium>
            <HeadingH2>*************</HeadingH2>
          </Column>
        </RowItem>
        <ButtonEdit onClick={() => setOpenEditPassword(!openEditPassword)}>
          Edit
        </ButtonEdit>
      </Row>
      <Item>
        {openEditPassword && (
          <Form>
            <RowItem>
              <IconGrey>
                <ion-icon size="large" name="lock-closed-outline"></ion-icon>
              </IconGrey>
              <InputFrom
                type="password"
                name="passwordCurrent"
                onChange={handleChange}
                placeholder="Current Password"
                required
              />
            </RowItem>
            <RowItem>
              <IconGrey>
                <ion-icon size="large" name="lock-closed-outline"></ion-icon>
              </IconGrey>
              <InputFrom
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="New Password"
                required
              />
            </RowItem>
            <RowItem>
              <IconGrey>
                <ion-icon size="large" name="lock-closed-outline"></ion-icon>
              </IconGrey>
              <InputFrom
                type="password"
                name="passwordConfirm"
                onChange={handleChange}
                placeholder="Confirm New Password"
                required
              />
            </RowItem>
            <Button
              type="submit"
              onClick={async () => {
                try {
                  await updatePassword(formState).unwrap();
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

export default MyAccountPassword;
