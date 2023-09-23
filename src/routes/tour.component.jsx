import { Link } from "react-router-dom";
import { useContext } from "react";
import { AddRemoveContext } from "../contexts/controlAddRemoveCarts.context";
import { UserContext } from "../contexts/user.context";
import Navigation from "../components/nav.component";
import Map from "../components/map.component";
import Reviews from "../components/reviews.component";
import Comments from "../components/comments.component";
import Footer from "../components/footer.component";

const TourPage = ({ tour }) => {

  const { currentUser } = useContext(UserContext);
  const { bookmarks, controlItemToBookmarks, shoppingCart, controlItemToShoppingCart, addItemToCart} = useContext(AddRemoveContext);

  const shoppingCartFiltered = shoppingCart.filter(item => item !== '');

  const controlBookmark = () => controlItemToBookmarks(tour);
  const controlShoppingCart = () => {
    controlItemToShoppingCart(tour);
    addItemToCart(tour)
  };

  return (
    <div>
      <Navigation/>

      <div className="tour">
        <div className="tour__content">  
          <div className="tour__header">
            <div className="tour__pic">
              <img src={require(`../img/${ tour.imageCover }`)} className="tour__img" alt='tour'/>
            </div>
            <div className="tour__details">   
              <div className="save">
              { currentUser ? (
                  <button onClick={ controlBookmark } className={`btn cardLarge__save icon icon__save bookmarkIcon_${ tour._id }`}>
                    { bookmarks.length === 0 ? (
                      <div className={`icon_${ tour._id } cardLarge__save icon icon__save`}>  
                        <ion-icon size="large" name="bookmark-outline"></ion-icon> 
                      </div>
                    ) : (
                      bookmarks.map(el => 
                        (el._id === tour._id) ? (
                          <div className={`icon_${ tour._id } cardLarge__save icon icon__save`}>
                            <ion-icon size="large" name="bookmark"></ion-icon>
                          </div>
                        ) : (
                          <div className={`icon_${ tour._id } cardLarge__save icon icon__save`}>  
                            <ion-icon size="large" name="bookmark-outline"></ion-icon> 
                          </div>
                        )
                      )
                    )}
                  </button>
                ) : ('')}
              </div>
              <div className="tour__detailsLinks">
                <Link to="/login" className="btnAuthSignUp tour__detailsLink">Book with flexibility</Link>
                <Link to="/login" className="btnAuthSignUp tour__detailsLink">Get discount</Link>
              </div>
              <h4 className="heading heading__4 tour__detailsTitle">{ tour.name }</h4>
              <div className="tour__detailsDays">
                <p className="title__second title__second--dark">{ tour.days } days</p>
                <div className="tour__detailsStar">
                  <p className="title__second title__second--dark">{ tour.ratingAverage }</p>
                  <div className="icon__stars">
                    <ion-icon size="small" name="star"></ion-icon>
                  </div>
                  <div className="text__description text__description--dark"> 
                    <Link to={`${ tour._id }`} className="link">{ tour.ratingQuantity }</Link>
                  </div>
                </div>
              </div>
              <p className="text__description text__description--dark tour__detailsStarts">Start & end: <b>{ tour.startAndEndPoint }</b></p>
              <div className="tour__detailsKeywords">
                { tour.keywords.map(word => {
                  return <Link to={`${ tour._id }`} key={`keywords.${ word }`} className="tour__detailsKeyword">{ word }</Link>
                })}
              </div>
              <div className="tour__detailsDescription">
                <p className="text__description text__description--dark"><b>Max group size:</b><br/>{ tour.maxGroupSize }</p>
                <p className="text__description text__description--dark"><b>Operated in:</b><br/>{ tour.languages }</p>
                <p className="text__description text__description--dark"><b>Min age:</b><br/>{ tour.minGroupSize }</p>
                <p className="text__description text__description--dark"><b>Food:</b><br/>{ tour.food }</p>
                <p className="text__description text__description--dark"><b>Sleeping:</b><br/>{ tour.sleeping }</p>
                <div className="text__description text__description--dark"><b>Stops:</b>
                { tour.stops.map(stop => {
                  return <p key={`stops.${stop}`}>{ stop }</p>
                })}
                </div>
              </div>
              <div className="tour__detailsPrice">
                <p className="tour__detailsEuro">€{ tour.price }<span className="text__description text__description--dark"><br/>/per person</span></p>
                { shoppingCartFiltered.find( el => el._id === tour._id) ? ( 
                  <button onClick={ controlShoppingCart } className="tour__detailsBtn btn btn__main btn__inactive">
                    in cart
                  </button>
                ) : (
                  <Link to='/shoppingCart' onClick={ controlShoppingCart } className="tour__detailsBtn btn btn__main">
                  book now
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="tour__description">
            <p className="title__second title__second--dark">Description</p>
            <p className="text__description text__description--dark">{ tour.description }</p>
            <div className="tour__checklist">
              { tour.descriptionCheckPoints.map((point) => {
                return (
                  <div key={`checkpoints.${ point }`} className="tour__checklist--flex">
                    <div className="icon icon__check">
                      <ion-icon size="large" name="checkmark-outline"></ion-icon>
                    </div>
                    <p className="title__second title__second--dark">{ point }</p>
                  </div>
                )
              })}
            </div>
            <div className="tour__location">
              <div className="tour__locationStart">
                <p className="text__description text__description--dark">Start / end: </p>  
                <p className="title__second title__second--dark "><b>{ tour.startAndEndPoint }</b></p>
              </div>
              <div className="tour__locationStops">
                <p className="text__description text__description--dark">Stops: </p> 
                <div className="title__second title__second--dark">
                  <div className="tour__checklist">
                    { tour.stopPoints.map(point => {
                      return (
                        <div className="tour__stops" key={ point }>
                          <div className="icon__stars">
                            <ion-icon size="small" name="pin"></ion-icon>
                          </div>
                          <span key={`stopPoints.${ point }`}>{ point } </span>
                        </div>
                      )
                    })} 
                  </div>
                </div>
              </div>             
              <Map tour={ tour } />
            </div>
            <Reviews tour={ tour }/>
            <Comments tour={ tour }/>
          </div>  
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default TourPage;