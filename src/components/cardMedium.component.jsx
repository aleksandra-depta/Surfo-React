import { useContext } from "react";
import { Link } from "react-router-dom";
import { AddRemoveContext } from "../contexts/controlAddRemoveCarts.context";
import { UserContext } from "../contexts/user.context";

const CardMedium = ({tour}) => {

  const { currentUser } = useContext(UserContext);
  const {bookmarks, controlItemToBookmarks} = useContext(AddRemoveContext);
  const controlBookmark = () => controlItemToBookmarks(tour);

  return (
    <div className="cardMedium">
      <div className="cardSmall__box">
        <img src={require(`../img/${tour.imageCover}`)} className="cardSmall__img" alt="tour"/>
        <div className="save__cardMedium">
          { currentUser &&
            <button onClick={controlBookmark} className={`btn cardLarge__save icon icon__save bookmarkIcon_${tour._id}`}>
              { bookmarks.length === 0 ? (
                <div className={`icon_${tour._id} cardLarge__save icon icon__save`}>  
                  <ion-icon size="large" name="bookmark-outline"></ion-icon> 
                </div>
              ) : (
                bookmarks.map(el => 
                  (el._id === tour._id) ? (
                    <div className={`icon_${tour._id} cardLarge__save icon icon__save`}>
                      <ion-icon size="large" name="bookmark"></ion-icon>
                    </div>
                  ) : (
                    <div className={`icon_${tour._id} cardLarge__save icon icon__save`}>  
                      <ion-icon size="large" name="bookmark-outline"></ion-icon> 
                    </div>
                  )
                )
              )}
            </button>
          }
        </div>
      </div>
      <div className ="cardMedium__details">
        <div className="cardMedium__details--description">
        <p className="title__second title__second--dark">{ tour.name }</p>
        <p className="text__description text__description--dark">{ tour.island }, Canaries <br/>{ tour.days }-day trip</p>
        </div>
        <div className="cardMedium__details--opinion">
          <div className="cardMedium__details--stars">
            <div className="icon__stars"><ion-icon size='small' name="star"></ion-icon></div>
            <div className="icon__stars"><ion-icon size='small' name="star"></ion-icon></div>
            <div className="icon__stars"><ion-icon size='small' name="star"></ion-icon></div>
            <div className="icon__stars"><ion-icon size='small' name="star"></ion-icon></div>
            <div className="icon__stars"><ion-icon size='small' name="star"></ion-icon></div>
          </div>
          <p className="text__description--dark text__small">See what people say</p>
          <Link to={`/tour/${tour._id}`} className="link__opinions link-to-opinions">{tour.ratingQuantity} opinions</Link>
        </div>          
        <Link 
          to={`/tour/${tour._id}`} 
          onClick={() => {window.scrollTo({top: 0, left: 0});}} className="cardMedium__details--btn btn btn__secondary btn__secondary--sea"
        >
          See more
        </Link>      
      </div>        
    </div>
  )
}

export default CardMedium;