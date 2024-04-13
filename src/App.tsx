import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { useAuthQuery, useGetToursQuery } from "./services/toursApi";

import HomePage from "./routes/home/home.component";
import OfferPage from "./routes/offer/offer.component";
import OfferType from "./routes/offer/offerType.component";
import OfferLocation from "./routes/offer/offerLocation.component";
import LoginPage from "./routes/authLogin/authLogin.component";
import SignUpPage from "./routes/authSignUp/authSignUp.component";
import TourPage from "./routes/tour/tour.component";
import ShoppingCart from "./routes/shoppingCart/shoppingCart.component";
import Navigation from "./components/nav/nav.component";
import AuthPage from "./routes/auth/auth.component";
import UserProfile from "./routes/userProfile/userProfile.component";
import Confirmation from "./routes/confirmation/confirmation.component";
import Page404 from "./routes/404/404.component";
import MyAccount from "./routes/myAccount/myAccount.component";
import MyBooking from "./routes/myBooking/myBooking.component";
import MyFavorites from "./routes/myFavorites/myFavorites.component";

import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("jwt");

const App = () => {
  const { data: tours, isSuccess, isLoading } = useGetToursQuery();
  useAuthQuery(token);
  const { currentUser } = useAppSelector((store) => store.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <>
            <Route index element={<HomePage />} />
            <Route path="/offer" element={<OfferPage />}>
              <Route path="/offer/type" element={<OfferType />} />
              <Route path="/offer/location" element={<OfferLocation />} />
            </Route>
            <Route path="/" element={<AuthPage />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Route>
            {isSuccess && (
              <>
                {tours.data.map((tour) => (
                  <Route
                    key={`tour${tour._id}`}
                    path={`/tour/${tour._id}`}
                    element={<TourPage tour={tour} />}
                  />
                ))}
              </>
            )}
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/confirmation" element={<Confirmation />} />
            {currentUser !== null && (
              <Route path="/" element={<UserProfile />}>
                <Route path="/myAccount/user" element={<MyAccount />} />
                <Route path="/myAccount/booking" element={<MyBooking />} />
                <Route path="/myAccount/favorites" element={<MyFavorites />} />
              </Route>
            )}
          </>
        </Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
