import { Link } from "react-router-dom";
import { useContext } from "react";
import { AddRemoveContext } from "../contexts/controlAddRemoveCarts.context";
import Navigation from "../components/nav.component";
import CardSmall from "../components/cardSmall.component";
import MyAccountNav from "../components/myAccountNav.component";
import Footer from "../components/footer.component";
import Logo from "../img/logo.png"

const MyFavorites = () => {
  
  const { bookmarks } = useContext(AddRemoveContext);
  const bookmarksFiltered = bookmarks.filter(bookmark => bookmark !== '');

  return (
    <div>
      <Navigation/>
      <div className="container container__page">
        <MyAccountNav/>
        <div className="myAccount__content">
          <div>
            <div className="myAccount__logo">
              <img src={`${Logo}`} alt="Surfo logo" className="nav__logo" />
            </div>
            <h4 className="heading__4"> My Favorites </h4>
            <p className="text__small"> Here you can view all your saved tours. </p>
            <div>
              { bookmarksFiltered.length === 0 ? (
                <div className="myAccount__emptyBooking">
                  <p className="heading__4"> You do not have any saved tours yet! </p>
                  <Link to="/offer" className="btn btn__main myAccount__emptyBookingBtn"> See our offer </Link>
                </div>
              ) : (
                <div className="myAccount__myBooking cards__small"> 
                  { bookmarksFiltered.map((item) => (<CardSmall key={item._id} tour={item} />))}
                </div>
              )}
            </div>
          </div> 
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default MyFavorites;