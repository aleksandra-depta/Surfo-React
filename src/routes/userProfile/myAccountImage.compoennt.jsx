import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../services/toursApi";

import { ButtonSecondary } from "../../styled/buttons";
import { TextMedium } from "../../styled/typography";
import { IconForm, IconGrey } from "../../styled/icons";
import { InputFrom } from "../../styled/inputs";
import {
  ButtonEdit,
  Column,
  Form,
  ImageUser,
  Item,
  Row,
  RowItem,
} from "./userProfile.styles";
import InfoMessageInput from "../../components/input/infoMessage.component";

const MyAccountImage = () => {
  const { currentUser } = useSelector((store) => store.auth);
  const [openEditImage, setOpenEditImage] = useState(false);

  const [formState, setFormState] = useState({
    photo: "",
  });
  const [updateUserPhoto, { isLoading }] = useUpdateUserMutation();

  /////////////
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);

    await updateUserPhoto(formData).parse;
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
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
        <ButtonEdit
          onClick={() => setOpenEditImage(!openEditImage)}
          button={openEditImage}
        >
          {openEditImage ? (
            <ion-icon size="large" name="caret-up-outline"></ion-icon>
          ) : (
            "Edit"
          )}
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
                id="photo"
                type="file"
                name="file"
                // accept="image/*"
                onChange={handleFileChange}
                placeholder="Upload photo"
                required
              />
            </RowItem>
            <InfoMessageInput />

            <ButtonSecondary
              type="submit"
              onClick={handleSubmit}
              // onClick={async () => {
              //   try {
              //     await updateUserPhoto(formState).unwrap();
              //   } catch (err) {
              //     console.log(err);
              //   }
              // }}
            >
              Update
            </ButtonSecondary>
          </Form>
        )}
      </Item>
    </>
  );
};

export default MyAccountImage;
