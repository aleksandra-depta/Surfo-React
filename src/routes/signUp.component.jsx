import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Newsletters from "../components/newsletter.component";
import { UserContext } from "../contexts/user.context";
import Navigation from "../components/nav.component";
import LoggedIn from "../components/loggedIn.component";

import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

const SignUpPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://127.0.0.1:4000/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm
      },
    };
    await axios(configuration)
    .then((res) => {
      cookies.set("jwt", res.data.token, {
        path: "/",
      });
    })
    .catch((error) => {
      // error = new Error();
    });

    const token = cookies.get('jwt');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
    axios.get(`http://127.0.0.1:4000/api/v1/users/me`, { headers })
    .then(response => {
      const currentUser = response.data.data.data;
      setCurrentUser(currentUser);
    })
    .catch((error) => {
      // error = new Error();
    });
  }

  return (
    <div>
      <Navigation/>
      <section className="container container__page">
        <div className="container__content">
        { currentUser ? 
          <LoggedIn/>
          :
          <div className="login">
            <div className="login__nav">
              <Link to="/login" className="btn title__second title__main--dark"> Log In </Link>
              <p className="login__navEl"> </p>
              <Link to="/signup" className="btn title__second title__main--dark"> Sign Up </Link>
            </div>
            <div>
              <div>
                <form onSubmit={(e) => {handleSubmit(e)}} className="form__form">
                  <div className="form__row form__user">
                    <div className="icon__log form__userIcon">
                      <ion-icon size='large' name="person-outline"></ion-icon>
                    </div>
                    <input 
                      type="text" 
                      onChange={(e) => setName(e.target.value)}
                      name='name' 
                      value={name} 
                      className="input" 
                      placeholder="User Name" 
                      required/>
                  </div>
                  <div className="form__row form__email">
                    <div className="icon__log form__emailIcon">
                      <ion-icon size="large" name="mail-outline"></ion-icon>
                    </div>
                    <input 
                      type="email" 
                      onChange={(e) => setEmail(e.target.value)}
                      name='email' 
                      value={email} 
                      className="input" 
                      placeholder="Email@example.com" 
                      required/>
                  </div>
                  <div className="form__row form__password">
                    <div className="icon__log form__passwordIcon" >
                      <ion-icon size='large' name="lock-closed-outline"></ion-icon>
                    </div>
                    <input 
                      type="password" 
                      onChange={(e) => setPassword(e.target.value)}
                      name='password' 
                      value={password} 
                      className="input form__passwordInput" 
                      placeholder="Password" 
                      required/>
                  </div>
                  <div className="form__row form__password">
                    <div className="icon__log form__passwordIcon" >
                      <ion-icon size='large' name="lock-closed-outline"></ion-icon>
                    </div>
                    <input 
                      type="password" 
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                      name='confirmPassword' 
                      value={passwordConfirm} 
                      className="input form__passwordInput" 
                      placeholder="Confirm Password" 
                      required/>
                  </div>
                  <div className="form__terms">
                    <input 
                      type="checkbox" 
                      name="terms"
                      required
                      />
                    <label className="text__small text__small--grey">I've read and agree to <button className="link"> Terms & Conditions</button></label>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn__main form__btn"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Sign up
                  </button>  
                </form>    
                <h4 className="text__description text__description--grey"> Already have an account? <Link to="/login" className="link"> Log in!</Link> </h4>   
              </div>
            </div>
          </div>
        }
          <Newsletters/>
        </div> 
      </section>
    </div>
  )
}

export default SignUpPage;