import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'

const Newsletters = () => {

  return (
    <div className="cta">
      <Link to="/">
        <img className="cta__logo" alt="Surfo" src={Logo} />
      </Link>
      <h2 className="cta__heading heading__1">Join us</h2>
      <h3 className="cta__heading-3 heading__3">Get special discount on your <br/> first adventure with us </h3>
      <h2 className="cta__heading heading__2">Newsletters</h2>
      <form action="" className="cta__form">
        <input className="input__cta"
          type="email"
          placeholder="me@example.com"
          required
        />            
        <button className="cta__btn btn btn__main btn__main--add">Sign me up</button>
      </form>        
    </div>
  )
}

export default Newsletters;