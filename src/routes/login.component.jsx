import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import Navigation from "../components/nav.component";
import Newsletters from "../components/newsletter.component";
import LoggedIn from "../components/loggedIn.component";

import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://127.0.0.1:4000/api/v1/users/login",
      data: {
        email,
        password,
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
                <h4 className="title__second title__second--dark login__subtitle"> 
                  New user? <Link to="/signup" className="link"> Create an account </Link>
                </h4>
                <form onSubmit={(e)=> handleSubmit(e)} className="form__form">
                  <div className='form__row'>
                    <div className="icon__log form__userIcon">
                      <ion-icon size='large' name="person-outline"></ion-icon>
                    </div>
                    <input 
                      type="text" 
                      name='email' 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      className="input" 
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form__row form__password">
                    <div className="icon__log form__passwordIcon">
                      <ion-icon size='large' name="lock-closed-outline"></ion-icon>
                    </div>
                    <input 
                      type="password" 
                      name="password"
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                      className="input login__passwordInput" 
                      placeholder="Password" 
                      required
                    />
                  </div>
                  <button 
                    type='submit' 
                    onClick={(e) => handleSubmit(e)}
                    className="btn btn__main form__btn"
                  >
                    Log in
                  </button>
                </form>      
                <h4 className="text__description text__description--grey"> Forgot your password? <button className="link"> Get it back! </button> </h4>      
              </div>
            </div>
            <div>
              <div className="login__forgotPassword">
                <div className="form__row form__email">
                  <div className="icon__log">
                    <ion-icon size='large' name="mail-outline"></ion-icon>
                  </div>
                  <input 
                    type="email" 
                    className="input" 
                    placeholder="Email@example.com" 
                    required
                  />
                </div>
                <button className="btn btn__main form__btn">Send Email</button>
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

export default LoginPage;