import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { AddRemoveContext } from "../contexts/controlAddRemoveCarts.context";
import Logo from "../img/logo.png"
import Cookies from "universal-cookie";
import { LinksNavMyAccountContext } from "../contexts/linksMyAcount.context";

const cookies = new Cookies();

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { bookmarks, shoppingCart } = useContext(AddRemoveContext);
  const { activeLink } = useContext(LinksNavMyAccountContext);

  const bookmarksFiltered = bookmarks.filter(bookmark => bookmark !== '');
  const shoppingCartFiltered = shoppingCart.filter(item => item !== '');

  const handleSubmit = async (e) => {
    cookies.remove("jwt", {path: '/'})
    window.location.reload()
  }

  return (
    <Fragment>
      <div className="nav">
        <div className="nav__left">
          <Link to='/'>
            <img src={`${Logo}`} alt="Surfo logo" className="nav__logo" />
          </Link>
          <Link to='/offer' className={`nav__link nav__offer ${window.location.pathname === '/' ?'' : 'sticky'}`}>Our offer</Link>
        </div>
        <div className="nav__right">
          <div className="nav__right navAuth">
            { currentUser ? (
              <div className="loggedInNav nav__right">
                <Link 
                  to='/myAccount' 
                  className={`nav__link nav__right--links nav__user ${window.location.pathname === '/' ?'' : 'sticky'}`}
                  onClick={() => activeLink('/myAccount')}
                >
                  <img src={require(`../img/${currentUser.photo}`)} className="nav__userPhoto" alt='User_photo'/> 
                  <p>{currentUser.name}</p>
                </Link>
                <Link onClick={(e) => handleSubmit(e)} className={`nav__link nav__right--links ${ window.location.pathname === '/' ?'' : 'sticky'}`}>Log out</Link>
                <Link 
                  to='/myAccount/favorites' 
                  className={`nav__btn ${window.location.pathname === '/' ? '' : 'sticky'}`}
                  onClick={() => activeLink('/myAccount/favorites')}
                >
                  { bookmarksFiltered.length === 0 ? (
                    <div className="icon icon__save--nav">
                      <ion-icon size='large' name="bookmark-outline"></ion-icon>
                    </div>
                  ) : (
                    <div className="icon icon__save--nav icon__save">
                      <ion-icon size='large' name="bookmark"></ion-icon>
                    </div>
                  )}
                </Link>
              </div>  
            ) : (
              <div className="nav__right">
                <Link to="/login" className={`nav__link nav__right--links ${window.location.pathname === '/' ?'' : 'sticky'}`}>Log In</Link>
                <Link to="/signup" className={`nav__link nav__right--links ${window.location.pathname === '/' ?'' : 'sticky'}`}>Sign Up</Link>
              </div>
            )}
            <Link to='/shoppingCart' className={`nav__btn ${window.location.pathname === '/' ?'' : 'sticky'}`}>
              <div className={`icon icon__save--nav ${shoppingCartFiltered.length === 0 ? '' : 'icon__shoppingCart--active'}`}>
                <ion-icon size='large' name="cart-outline"></ion-icon>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;