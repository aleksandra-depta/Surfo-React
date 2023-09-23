import { Link } from "react-router-dom";

import Logo from '../img/logo.png'

const LoggedIn = () => {
  return (
    <div className="login login__loggedIn">
      <Link to="/">
        <img className="cta__logo" alt="Surfo" src={Logo} />
      </Link>
      <h2 className="cta__heading heading__1 heading__1--dark">Welcome</h2>
      <h3 className="cta__heading-3 heading__3 heading__1--dark">Adventure with us </h3>
      <Link to='/offer' className="title__main link btnLogin">Our offer</Link>
      <Link to='/myAccount' className="cta__btn btn btn__main btn__main--add">My account</Link>
  </div>
  )
}

export default LoggedIn;