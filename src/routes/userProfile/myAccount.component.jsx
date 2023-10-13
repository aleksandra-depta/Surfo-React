import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";

import Cookies from "universal-cookie";
import axios from "axios";

import { HeadingH2, TextMedium, TextSmall } from "../../styled/typography";
import { IconForm, IconGrey } from "../../styled/icons";
import { ButtonWhiteBasic } from "../../styled/buttons";
import { InputFrom } from "../../styled/inputs";
import {
  Button,
  Column,
  Container,
  Content,
  Form,
  ImageUser,
  Item,
  LogoContainer,
  Row,
  RowItem,
} from "./userProfile.styles";
import { useSelector } from "react-redux";

const cookies = new Cookies();

const MyAccount = () => {
  const { currentUser } = useSelector((store) => store.auth);

  // const { currentUser, setCurrentUser } = useContext(UserContext);
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordNew, setPasswordNew] = useState("");
  // const [passwordNewConfirm, setPasswordNewConfirm] = useState("");

  // const [openEditUserName, setOpenEditUserName] = useState(false);
  // const [openEditEmail, setOpenEditEmail] = useState(false);
  // const [openEditPassword, setOpenEditPassword] = useState(false);
  // const [openEditImage, setOpenEditImage] = useState(false);

  // const handleSubmitUpdateMe = async (e) => {
  //   e.preventDefault();
  //   fetch("http://127.0.0.1:4000/api/v1/users/updateMe", {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       name: userName || currentUser.name,
  //       email: email || currentUser.email,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${cookies.get("jwt")}`,
  //     },
  //   });
  //   const token = cookies.get("jwt");
  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   };
  //   axios
  //     .get(`http://127.0.0.1:4000/api/v1/users/me`, { headers })
  //     .then((response) => {
  //       const currentUser = response.data.data.data;
  //       setCurrentUser(currentUser);
  //     })
  //     .catch((error) => {
  //       // error = new Error();
  //     });
  // };

  // const handleSubmitPassword = async (e) => {
  //   e.preventDefault();
  //   fetch("http://127.0.0.1:4000/api/v1/users/updateMyPassword", {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       passwordCurrent: password,
  //       password: passwordNew,
  //       passwordConfirm: passwordNewConfirm,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${cookies.get("jwt")}`,
  //     },
  //   });
  //   cookies.remove("jwt", { path: "/" });
  //   window.location.reload();
  //   window.location.pathname = "/login";
  // };

  // const [image, setImage] = useState({ preview: "", data: "" });
  // const [status, setStatus] = useState("");
  // const handleSubmitImage = async (e) => {
  //   e.preventDefault();
  //   let formData = new FormData();
  //   formData.append("file", image.data);

  //   const response = await fetch(
  //     "http://127.0.0.1:4000/api/v1/users/updateMe",
  //     {
  //       method: "PATCH",
  //       body: formData,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${cookies.get("jwt")}`,
  //       },
  //     }
  //   );
  //   if (response) setStatus(response.statusText);
  // };

  // const handleFileChange = async (e) => {
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   };
  //   setImage(img);
  // };

  return (
    <Container>
      <LogoContainer>
        <img src={require(`../../img/logo.png`)} alt="Surfo logo" />
      </LogoContainer>
      <HeadingH2> My account </HeadingH2>
      <TextSmall>
        Here you can view and update your user account. You can also manage your
        login options and password.
      </TextSmall>
      <Content>
        <>
          <Row>
            <RowItem>
              <IconForm>
                <ion-icon size="large" name="person-outline"></ion-icon>
              </IconForm>
              <Column>
                <TextMedium>User Name</TextMedium>
                <HeadingH2>{currentUser.name}</HeadingH2>
              </Column>
            </RowItem>
            <ButtonWhiteBasic
            // onClick={() => setOpenEditUserName(!openEditUserName)}
            >
              Edit
            </ButtonWhiteBasic>
          </Row>
          <Item>
            {/* {openEditUserName && (
              <Form
              // onSubmit={(e) => handleSubmitUpdateMe(e)}
              >
                <RowItem>
                  <IconGrey>
                    <ion-icon size="large" name="person-outline"></ion-icon>
                  </IconGrey>
                  <InputFrom
                    type="text"
                    value={userName}
                    // onChange={(e) => setUserName(e.target.value)}
                    placeholder="New User Name"
                    required
                  />
                </RowItem>
                <Button
                  type="submit"
                  // onClick={(e) =>
                  // handleSubmitUpdateMe(e)}
                >
                  Update
                </Button>
              </Form>
            )} */}
          </Item>
        </>

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
            <ButtonWhiteBasic
            // onClick={() => setOpenEditEmail(!openEditEmail)}
            >
              Edit
            </ButtonWhiteBasic>
          </Row>
          <Item>
            {/* {openEditEmail && (
              <Form 
              // onSubmit={(e) => handleSubmitUpdateMe(e)}
              >
                <RowItem>
                  <IconGrey>
                    <ion-icon size="large" name="mail-outline"></ion-icon>
                  </IconGrey>
                  <InputFrom
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email@example.com"
                    required
                  />
                </RowItem>
                <Button type="submit" 
                // onClick={(e) => handleSubmitUpdateMe(e)}
                >
                  Update
                </Button>
              </Form>
            )} */}
          </Item>
        </>

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
            <ButtonWhiteBasic
            // onClick={() => setOpenEditPassword(!openEditPassword)}
            >
              Edit
            </ButtonWhiteBasic>
          </Row>
          <Item>
            {/* {openEditPassword && (
              <Form onSubmit={(e) => handleSubmitUpdateMe(e)}>
                <RowItem>
                  <IconGrey>
                    <ion-icon
                      size="large"
                      name="lock-closed-outline"
                    ></ion-icon>
                  </IconGrey>
                  <InputFrom
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Current Password"
                    required
                  />
                </RowItem>
                <RowItem>
                  <IconGrey>
                    <ion-icon
                      size="large"
                      name="lock-closed-outline"
                    ></ion-icon>
                  </IconGrey>
                  <InputFrom
                    type="password"
                    value={passwordNew}
                    onChange={(e) => setPasswordNew(e.target.value)}
                    placeholder="New Password"
                    required
                  />
                </RowItem>
                <RowItem>
                  <IconGrey>
                    <ion-icon
                      size="large"
                      name="lock-closed-outline"
                    ></ion-icon>
                  </IconGrey>
                  <InputFrom
                    type="password"
                    value={passwordNewConfirm}
                    onChange={(e) => setPasswordNewConfirm(e.target.value)}
                    placeholder="Confirm New Password"
                    required
                  />
                </RowItem>
                <Button type="submit" onClick={(e) => handleSubmitPassword(e)}>
                  Update
                </Button>
              </Form>
            )} */}
          </Item>
        </>

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
            <ButtonWhiteBasic
            // onClick={() => setOpenEditImage(!openEditImage)}
            >
              Edit
            </ButtonWhiteBasic>
          </Row>
          <Item>
            {/* {openEditImage && (
              <Form onSubmit={(e) => handleSubmitImage(e)}>
                <RowItem>
                  <IconGrey>
                    <ion-icon size="large" name="camera-outline"></ion-icon>
                  </IconGrey>
                  <InputFrom
                    type="file"
                    onChange={(e) => handleFileChange(e.target.value)}
                    placeholder="Upload photo"
                    required
                  />
                </RowItem>
                <Button type="submit" onClick={(e) => handleSubmitImage(e)}>
                  Update
                </Button>
              </Form>
            )} */}
          </Item>
        </>
      </Content>
    </Container>
  );
};

export default MyAccount;
