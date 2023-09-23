import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AddRemoveContext } from "../contexts/controlAddRemoveCarts.context";
import { UserContext } from "../contexts/user.context";
import Navigation from "../components/nav.component";
import Footer from "../components/footer.component";
import ShoppingCartItem from "../components/shoppingCartItem.component";

import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ShoppingCart = ({ tours }) => {
  const [ payment, setPayment ] = useState(false);
  const { shoppingCart, setShoppingCart, controlItemToShoppingCart, addItemToCart, removeItemToCart, items, setItems } = useContext(AddRemoveContext);
  const { currentUser} = useContext(UserContext)

  let shoppingCartFiltered = shoppingCart.filter(shoppingCart => shoppingCart !== '');

  const controlPaymentPage = () => {
    setShoppingCart([]);
    setItems([]);
    const token = cookies.get('jwt');

    items.map(el => (
      axios.post(`http://127.0.0.1:4000/api/v1/booking`, 
      {
        travelers : `${el.quantity}`,
        tour : `${el._id}`,
        user : `${currentUser._id}`, 
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(() => {
        console.log('success')
        setPayment(true);
      })
    ))
  }
  const totals = items.map(item =>  item.price * item.quantity).reduce((acc, cur) => acc + cur, 0);
  const bookingCode = Math.floor(Math.random() * 1000000) + 10000;

  return (
    <div>
      <Navigation/>
      <div className="container container__page">
        <div className="myAccount__content">
          <div className="myAccount__account">
            <div className="myAccount__logo">
              <img src={require(`../img/logo.png`)} alt="Surfo logo" className="nav__logo" />
            </div>
            { payment ? (
              <div>
                <h4 className="heading__4"> Your Booking Confirmation </h4>
                <p className="text__small"> Adventure with us! See you! </p>
                <div className="shoppingCart__booking">
                  <div className="shoppingCart__code">
                    <h4 className="heading__4"> Booking code: </h4>
                    <h4 className="tour__detailsEuro">{ bookingCode }</h4>
                  </div>
                  <p className="tour__detailsEuro"> Thank you for booking with us </p>
                  <h4 className="heading__4"> Your Surfo Team </h4> 
                  <Link to="/myAccount/booking" className="btn btn__main myAccount__emptyBookingBtn"> All Your bookings </Link>
                </div> 

              </div>
            ) : (
              <div>
                <h4 className="heading__4"> Shopping Cart </h4>
                <p className="text__small"> Adventure with us! View all your selected tours here! </p>
                { shoppingCartFiltered.length === 0 ? (
                  <div className="myAccount__emptyBooking">
                    <p className="heading__4"> Your shopping cart is empty </p>
                    <Link to="/offer" className="btn btn__main myAccount__emptyBookingBtn"> See our offer </Link>
                  </div>
                ) : (
                  <div>
                    <div className="shoppingCart__page"> 
                      { shoppingCartFiltered.map(tour => 
                        <div className="shoppingCart__row">
                          <button onClick={ () => controlItemToShoppingCart(tour) } className="btn icon__counter shoppingCart__counter">
                            <ion-icon size='large' name="trash-outline"></ion-icon>
                          </button>
                          <ShoppingCartItem tour={tour} />
                          <div className="shoppingCart__counter">
                            <button onClick={() => removeItemToCart(tour)} className="btn icon__counter">
                              <ion-icon size='large' name="remove-circle"></ion-icon>
                            </button>
                            <div className="select__bar shoppingCart__input"> 
                              { items.map( el => ( 
                                el._id === tour._id ? (
                                    el.quantity
                                  ) : ''
                              ))}
                            </div>
                            <button onClick={() => addItemToCart(tour)} className="btn icon__counter">
                              <ion-icon size='large' name="add-circle"></ion-icon>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="shoppingCart__totals">
                      <h4 className="heading__4"> Totals: </h4>
                      <p className="tour__detailsEuro">€{ totals }</p> 
                    </div>
                    <div>
                      <h4 className="heading__4"> Payment details </h4>
                      <p className="text__small"> Complete your payment details </p>
                      <form>
                        <p className="text__small"> ... </p>
                      </form>
                      <button onClick={ controlPaymentPage } className="shoppingCart__btn tour__detailsBtn btn btn__main">Confirm payment</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ShoppingCart;