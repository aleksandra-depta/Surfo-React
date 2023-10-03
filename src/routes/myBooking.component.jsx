import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import Navigation from "../components/nav/nav.component";
import MyAccountNav from "../components/myAccountNav.component";
import CardSmall from "../components/cardSmall/cardSmall.component";
import Footer from "../components/footer/footer.component";

import Logo from "../img/logo.png";

const MyBooking = () => {
  const { booking } = useContext(UserContext);

  return (
    <div>
      <Navigation />
      <div className="container container__page">
        <MyAccountNav />
        <div className="myAccount__content">
          <div>
            <div className="myAccount__logo">
              <img src={`${Logo}`} alt="Surfo logo" className="nav__logo" />
            </div>
            <h4 className="heading__4"> My booking </h4>
            <p className="text__small">
              {" "}
              Here you can view all your booked tours.{" "}
            </p>
            <div className="myAccount__bookingContent">
              {booking.length === 0 ? (
                <div className="myAccount__emptyBooking">
                  <p className="heading__4">
                    {" "}
                    You do not have any booked tours yet!{" "}
                  </p>
                  <Link
                    to="/offer"
                    className="btn btn__main myAccount__emptyBookingBtn"
                  >
                    {" "}
                    See our offer{" "}
                  </Link>
                </div>
              ) : (
                <div className="cards__small">
                  {booking.map((tour) => (
                    <CardSmall tour={tour.tour} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyBooking;
