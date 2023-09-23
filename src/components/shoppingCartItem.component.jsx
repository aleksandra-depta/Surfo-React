import { Link } from "react-router-dom";

const ShoppingCartItem = (tour) => {

  tour = tour.tour;

  return (
    <Link to={`/tour/${tour._id}`} className="text__description" >
      <div className="shoppingCart myAccount__row">
        <div className="shoppingCart__container">
          <div className="">
            <img src={require(`../img/${tour.imageCover}`)} className="shoppingCart__img" alt='tour'/>
          </div>
          <div className="shoppingCart__content">
            <h4 className="heading heading__4 tour__details--title">{tour.name}</h4>
            <p className="title__second title__second--dark">{tour.days} days</p>
            <p className="text__description text__description--dark tour__details--starts">Start & end: <b>{tour.startAndEndPoint}</b></p>
          </div>
        </div>
        <p className="tour__detailsEuro">€{tour.price}<span className="text__description text__description--dark"><br/>/per person</span></p>
      </div>
    </Link>
  )
}

export default ShoppingCartItem;