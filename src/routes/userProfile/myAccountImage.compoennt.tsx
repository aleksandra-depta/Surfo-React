import { useState } from "react";
import { useAppSelector } from "../../hooks";
// import { useUpdateUserMutation } from "../../services/toursApi";
import IonIcon from "@reacticons/ionicons";
import InfoMessageInput from "../../components/input/infoMessage.component";

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

const MyAccountImage = () => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const [openEditImage, setOpenEditImage] = useState<boolean>(false);

  // const [formState, setFormState] = useState<{ photo: string }>({
  //   photo: "",
  // });
  // const [updateUserPhoto, { isLoading }] = useUpdateUserMutation();

  // const [image, setImage] = useState<{ preview: string; data: string }>({
  //   preview: "",
  //   data: "",
  // });
  // const [status, setStatus] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let formData = new FormData();
  //   formData.append("file", image.data);
  //   // await updateUserPhoto(formData).parse;
  // };

  // const handleFileChange = (e>) => {
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   };
  //   setImage(img);
  // };

  return (
    <>
      <Row>
        <RowItem>
          <IconForm>
            <IonIcon size="large" name="camera-outline" />
          </IconForm>
          <Column>
            <TextMedium>User Image</TextMedium>
            <ImageUser
              src={require(`../../img/${currentUser?.photo}`)}
              alt="User_photo"
            />
          </Column>
        </RowItem>
        <ButtonEdit
          to=""
          onClick={() => setOpenEditImage(!openEditImage)}
          button={openEditImage}
        >
          {openEditImage ? (
            <IonIcon size="large" name="caret-up-outline" />
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
                <IonIcon size="large" name="camera-outline" />
              </IconGrey>
              <InputFrom
                id="photo"
                type="file"
                name="file"
                // accept="image/*"
                // onChange={handleFileChange}
                placeholder="Upload photo"
                required
              />
            </RowItem>
            <InfoMessageInput />

            <ButtonSecondary
              to=""
              type="submit"
              // onClick={handleSubmit}
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
