import { useContext } from "react";
import { UserContext } from "../contexts/user.context";
import ShoppingCartItem from "./shoppingCartItem.component";

const BookingCart = () => {

  const { booking } = useContext(UserContext);

  return (
    <div>
      { booking.length !== 0 &&
        <div className="shoppingCart__booking">
          <div>
            { booking.map( tour => (
              <ShoppingCartItem tour={ tour.tour } />
            ))}
          </div>
          <p className="tour__detailsEuro"> Thank you for booking with us </p>
          <h4 className="heading__4"> Your Surfo Team </h4> 
        </div>
      }
    </div> 
  )
}

export default BookingCart;