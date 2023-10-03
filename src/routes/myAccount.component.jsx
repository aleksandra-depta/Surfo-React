import { useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import MyAccountNav from "../components/myAccountNav.component";
import Navigation from "../components/nav/nav.component";
import Footer from "../components/footer/footer.component";

import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

const MyAccount = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [passwordNewConfirm, setPasswordNewConfirm] = useState("");

  const [openEditUserName, setOpenEditUserName] = useState(false);
  const [openEditEmail, setOpenEditEmail] = useState(false);
  const [openEditPassword, setOpenEditPassword] = useState(false);
  const [openEditImage, setOpenEditImage] = useState(false);

  const handleSubmitUpdateMe = async (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:4000/api/v1/users/updateMe", {
      method: "PATCH",
      body: JSON.stringify({
        name: userName || currentUser.name,
        email: email || currentUser.email,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("jwt")}`,
      },
    });
    const token = cookies.get("jwt");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(`http://127.0.0.1:4000/api/v1/users/me`, { headers })
      .then((response) => {
        const currentUser = response.data.data.data;
        setCurrentUser(currentUser);
      })
      .catch((error) => {
        // error = new Error();
      });
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:4000/api/v1/users/updateMyPassword", {
      method: "PATCH",
      body: JSON.stringify({
        passwordCurrent: password,
        password: passwordNew,
        passwordConfirm: passwordNewConfirm,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.get("jwt")}`,
      },
    });
    cookies.remove("jwt", { path: "/" });
    window.location.reload();
    window.location.pathname = "/login";
  };

  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  const handleSubmitImage = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", image.data);

    const response = await fetch(
      "http://127.0.0.1:4000/api/v1/users/updateMe",
      {
        method: "PATCH",
        body: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookies.get("jwt")}`,
        },
      }
    );
    if (response) setStatus(response.statusText);
  };

  const handleFileChange = async (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <div className="container container__page">
      <Navigation />
      <MyAccountNav />
      <div>
        <div className="myAccount__content">
          <div className="myAccount__account">
            <div className="myAccount__logo">
              <img
                src={require(`../img/logo.png`)}
                alt="Surfo logo"
                className="nav__logo"
              />
            </div>
            <h4 className="heading__4"> My account </h4>
            <p className="text__small">
              {" "}
              Here you can view and update your user account. You can also
              manage your login options and password.{" "}
            </p>

            <div className="myAccount__row">
              <div className="myAccount__rowMain">
                <div className="myAccount__rowOptions">
                  <div className="myAccount__icon form__userIcon">
                    <ion-icon size="large" name="person-outline"></ion-icon>
                  </div>
                  <div className="myAccount__text">
                    <p className="title__main title__main--dark ">User Name</p>
                    <p className="title__second title__second--dark ">
                      {currentUser.name}
                    </p>
                  </div>
                </div>
                <button
                  className="btnEdit"
                  onClick={() => setOpenEditUserName(!openEditUserName)}
                >
                  Edit
                </button>
              </div>
              {openEditUserName && (
                <div className="myAccount__rowUpdate">
                  <form
                    onSubmit={(e) => handleSubmitUpdateMe(e)}
                    className="form__form"
                  >
                    <div className="form__row">
                      <div className="icon__log form__userIcon">
                        <ion-icon size="large" name="person-outline"></ion-icon>
                      </div>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="input"
                        placeholder="New User Name"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={(e) => handleSubmitUpdateMe(e)}
                      className="btn btn__main form__btn"
                    >
                      Update
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="myAccount__row">
              <div className="myAccount__rowMain">
                <div className="myAccount__rowOptions">
                  <div className="myAccount__icon form__userIcon">
                    <ion-icon size="large" name="mail-outline"></ion-icon>
                  </div>
                  <div className="myAccount__text">
                    <p className="title__main title__main--dark ">Your Email</p>
                    <p className="title__second title__second--dark ">
                      {currentUser.email}
                    </p>
                  </div>
                </div>
                <button
                  className="btnEdit"
                  onClick={() => setOpenEditEmail(!openEditEmail)}
                >
                  Edit
                </button>
              </div>
              {openEditEmail && (
                <div className="myAccount__rowUpdate">
                  <form
                    onSubmit={(e) => handleSubmitUpdateMe(e)}
                    className="form__form"
                  >
                    <div className="form__row">
                      <div className="icon__log form__emailIcon">
                        <ion-icon size="large" name="mail-outline"></ion-icon>
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        placeholder="Email@example.com"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={(e) => handleSubmitUpdateMe(e)}
                      className="btn btn__main form__btn"
                    >
                      Update Email
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="myAccount__row">
              <div className="myAccount__rowMain">
                <div className="myAccount__rowOptions">
                  <div className="myAccount__icon form__userIcon">
                    <ion-icon
                      size="large"
                      name="lock-closed-outline"
                    ></ion-icon>
                  </div>
                  <div className="myAccount__text">
                    <p className="title__main title__main--dark ">Password</p>
                    <p className="title__second title__second--dark ">
                      *************
                    </p>
                  </div>
                </div>
                <button
                  className="btnEdit"
                  onClick={() => setOpenEditPassword(!openEditPassword)}
                >
                  Edit
                </button>
              </div>
              {openEditPassword && (
                <div className="myAccount__rowUpdate">
                  <form
                    onSubmit={(e) => handleSubmitPassword(e)}
                    className="form__form"
                  >
                    <div className="form__row">
                      <div className="icon__log">
                        <ion-icon
                          size="large"
                          name="lock-closed-outline"
                        ></ion-icon>
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Current Password"
                        required
                      />
                    </div>
                    <div className="form__row">
                      <div className="icon__log">
                        <ion-icon
                          size="large"
                          name="lock-closed-outline"
                        ></ion-icon>
                      </div>
                      <input
                        type="password"
                        value={passwordNew}
                        onChange={(e) => setPasswordNew(e.target.value)}
                        className="input form__passwordInput"
                        placeholder="New Password"
                        required
                      />
                    </div>
                    <div className="form__row">
                      <div className="icon__log form__passwordIcon">
                        <ion-icon
                          size="large"
                          name="lock-closed-outline"
                        ></ion-icon>
                      </div>
                      <input
                        type="password"
                        value={passwordNewConfirm}
                        onChange={(e) => setPasswordNewConfirm(e.target.value)}
                        className="input form__passwordInput"
                        placeholder="Confirm New Password"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={(e) => {
                        handleSubmitPassword(e);
                      }}
                      className="btn btn__main form__btn"
                    >
                      Update Password
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="myAccount__row">
              <div className="myAccount__rowMain">
                <div className="myAccount__rowOptions">
                  <div className="myAccount__icon form__userIcon">
                    <ion-icon size="large" name="camera-outline"></ion-icon>
                  </div>
                  <div className="myAccount__text">
                    <p className="title__main title__main--dark ">User Image</p>
                    <p className="title__second title__second--dark ">
                      {currentUser.photo}
                    </p>
                  </div>
                </div>
                <button
                  className="btnEdit"
                  onClick={() => setOpenEditImage(!openEditImage)}
                >
                  Edit
                </button>
              </div>
              {openEditImage && (
                <div className="myAccount__rowUpdate">
                  <form
                    onSubmit={(e) => handleSubmitImage(e)}
                    className="fomr__form"
                  >
                    <div className="form__row">
                      <div className="icon__log form__userIcon">
                        <ion-icon size="large" name="camera-outline"></ion-icon>
                      </div>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="input"
                        placeholder="Upload photo"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={(e) => {
                        handleSubmitImage(e);
                      }}
                      className="btn btn__main form__btn"
                    >
                      Upload image
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
