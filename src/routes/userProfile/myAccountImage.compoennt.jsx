import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../services/toursApi";

import { TextMedium } from "../../styled/typography";
import { IconForm, IconGrey } from "../../styled/icons";
import { InputFrom } from "../../styled/inputs";
import {
  Button,
  ButtonEdit,
  Column,
  Form,
  ImageUser,
  Item,
  Row,
  RowItem,
} from "./userProfile.styles";

const MyAccountImage = () => {
  const { currentUser } = useSelector((store) => store.auth);
  const [openEditImage, setOpenEditImage] = useState(false);

  const [formState, setFormState] = useState({
    photo: "",
  });
  const [updateUserPhoto, { isLoading }] = useUpdateUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Row>
        <RowItem>
          <IconForm>
            <ion-icon size="large" name="camera-outline"></ion-icon>
          </IconForm>
          <Column>
            <TextMedium>User Image</TextMedium>
            <ImageUser
              src={require(`../../img/${currentUser.photo}`)}
              alt="User_photo"
            />
          </Column>
        </RowItem>
        <ButtonEdit onClick={() => setOpenEditImage(!openEditImage)}>
          Edit
        </ButtonEdit>
      </Row>
      <Item>
        {openEditImage && (
          <Form>
            <RowItem>
              <IconGrey>
                <ion-icon size="large" name="camera-outline"></ion-icon>
              </IconGrey>
              <InputFrom
                type="file"
                name="photo"
                onChange={handleChange}
                placeholder="Upload photo"
                required
              />
            </RowItem>
            <Button
              type="submit"
              onClick={async () => {
                try {
                  await updateUserPhoto(formState).unwrap();
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

export default MyAccountImage;
