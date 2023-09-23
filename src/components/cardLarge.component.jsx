import { useContext } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { UserContext } from "../contexts/user.context";
import { AddRemoveContext } from "../contexts/controlAddRemoveCarts.context";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CardLarge = ({tour}) => {

  const { currentUser } = useContext(UserContext);
  const { bookmarks, controlItemToBookmarks } = useContext(AddRemoveContext);

  const controlBookmark = () => controlItemToBookmarks(tour);

  return (
    <div className={`slider slider${ tour.nr }`}>                    
      <div className="save__cardMedium">
      { currentUser ? (
        <button onClick={ controlBookmark } className={`btn cardLarge__save icon icon__save bookmarkIcon_${ tour._id }`}>
          { bookmarks.length === 0 ? (
            <div className={`icon_${ tour._id } cardLarge__save icon icon__save`}>  
              <ion-icon size="large" name="bookmark-outline"></ion-icon> 
            </div>
          ) : (
            bookmarks.map(el => (el._id === tour._id) ? (
              <div className={`icon_${ tour._id } cardLarge__save icon icon__save`}>
                <ion-icon size="large" name="bookmark"></ion-icon>
              </div>
            ) : (
              <div className={`icon_${ tour._id } cardLarge__save icon icon__save`}>  
                <ion-icon size="large" name="bookmark-outline"></ion-icon> 
              </div>
            ))
          )}
        </button>
      ) : ('')}
      </div>
      <Swiper 
        className="swiper-wrapper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
      >
        <SwiperSlide className="cardLarge swiper-slide">
          <img src={require(`../img/${ tour.cardLargeImgUr800[0] }`)} className="cardLarge__img" alt='tour'/>
          <div className="cardLarge__details">
            <p className="cardLarge__details--h1 title title__main title__main--white">{ tour.name }</p>
            <p className="cardLarge__details--h2 title title__second title__second--white">{ tour.island }, Canaries </p>
            <div className="cardLarge__icon">
              <div className="cardLarge__icon--star icon__star">
                <ion-icon size="small" name="star-outline"></ion-icon>
              </div>
              <p className="cardLarge__icon--stardescription title__icon--white">{ tour.ratingAverage }</p>
              <p className="cardLarge__icon--leveldescription title__icon2--white">Difficulty</p>
              <img src={require(`../img/cardLarge_${ tour.cardDifficultyImageUrl }`)} className="icon__level" alt='tour'/>
            </div>
            <p className="cardLarge__details--description text text__description text__description--white">{ tour.cardLargeDescription }</p>
            <Link 
              to={`/tour/${ tour.id }`} 
              onClick={() => {window.scrollTo({top: 0, left: 0});}}
              className="btn btn__secondary btn__secondary--white"
            >
              Book Now
            </Link>
          </div>       
        </SwiperSlide> 

        <SwiperSlide className="cardLarge swiper-slide">
          <img src={require(`../img/${ tour.cardLargeImgUr800[1] }`)} className="cardLarge__img" alt='tour'/>
          <div className="cardLarge__details">
            <p className="cardLarge__details--h1 title title__main title__main--white">{ tour.name }</p>
            <p className="cardLarge__details--h2 title title__second title__second--white"> { tour.island }, Canaries </p>              
            <Link to={`/tour/${ tour._id }`} className="btn btn__secondary btn__secondary--white">Book Now</Link>
          </div>          
        </SwiperSlide>
        
        <SwiperSlide className="cardLarge swiper-slide"> 
          <img src={require(`../img/${ tour.cardLargeImgUr800[2] }`)} className="cardLarge__img" alt='tour'/>
          <div className="cardLarge__details">
            <p className="cardLarge__details--h1 title title__main title__main--white">{ tour.name }</p>
            <p className="cardLarge__details--h2 title title__second title__second--white">{ tour.island }, Canaries </p>              
            <Link to={`/tour/${ tour._id }`} className="btn btn__secondary btn__secondary--white">Book Now</Link>
          </div>      
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CardLarge;